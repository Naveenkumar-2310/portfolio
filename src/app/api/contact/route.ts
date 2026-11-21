import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const INQUIRIES_FILE = path.join(process.cwd(), "inquiries.json");

// Helper to save inquiry to local JSON database
async function saveInquiry(inquiry: {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
}) {
  try {
    let existing: Array<typeof inquiry> = [];
    try {
      const data = await fs.readFile(INQUIRIES_FILE, "utf-8");
      existing = JSON.parse(data);
    } catch {
      existing = [];
    }
    existing.unshift(inquiry);
    await fs.writeFile(INQUIRIES_FILE, JSON.stringify(existing, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save inquiry to file:", err);
  }
}

// GET /api/contact -> View all submitted inquiries directly in your browser!
export async function GET() {
  try {
    const data = await fs.readFile(INQUIRIES_FILE, "utf-8");
    const inquiries = JSON.parse(data);
    return NextResponse.json({
      total: inquiries.length,
      inquiries,
    });
  } catch {
    return NextResponse.json({
      total: 0,
      inquiries: [],
      message: "No inquiries received yet.",
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, honeypot, elapsedMs } = body;

    // 1. Anti-Bot Defense 1: Honeypot check
    // Real users never see or fill this field; bots blindly fill all inputs
    if (honeypot && honeypot.trim() !== "") {
      // Silently drop bot submission
      return NextResponse.json(
        { success: true, message: "Request received" },
        { status: 200 }
      );
    }

    // 2. Anti-Bot Defense 2: Time-gate check (< 1500ms indicates automated script)
    if (typeof elapsedMs === "number" && elapsedMs < 1500) {
      return NextResponse.json(
        { success: true, message: "Request received" },
        { status: 200 }
      );
    }

    // 3. Validation: Required fields & minimum message length (stops empty / spam clicks)
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Please provide an email address so Naveen can contact you back." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address (e.g. name@domain.com)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please enter a message of at least 10 characters explaining your consultation needs." },
        { status: 400 }
      );
    }

    // Forward to Web3Forms if WEB3FORMS_ACCESS_KEY is set in environment
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `Portfolio Inquiry from ${name}`,
            from_name: name,
            email: email,
            phone: phone || "Not provided",
            message: message,
          }),
        });
      } catch (forwardErr) {
        console.warn("Web3Forms forward warning:", forwardErr);
      }
    }

    // Forward to Google Sheet Webhook (saves to spreadsheet + emails to Gmail)
    const googleSheetWebhook =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbxSIqYjVifvHMzd52V6oNjKImNSQaIRkMvr9XtbFV5Bx48S0oPBcUuqR6lr0PJHZyEX/exec";

    if (googleSheetWebhook) {
      try {
        await fetch(googleSheetWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone: phone || "Not provided",
            message,
            timestamp: new Date().toISOString(),
          }),
          redirect: "follow",
        });
      } catch (sheetErr) {
        console.warn("Google Sheet forward warning:", sheetErr);
      }
    }

    const inquiryRecord = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name,
      email,
      phone: phone || "Not provided",
      message,
      timestamp: new Date().toISOString(),
    };

    // Save to persistent inquiries.json database
    await saveInquiry(inquiryRecord);

    // Log the valid inquiry for server audit
    console.log("=== NEW CONSULTATION QUERY RECEIVED ===");
    console.log(`From: ${name} <${email}>`);
    console.log(`Phone: ${phone || "N/A"}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${inquiryRecord.timestamp}`);
    console.log("=======================================");

    return NextResponse.json({
      success: true,
      message: "Consultation inquiry transmitted successfully to Naveen Kumar P.",
      data: inquiryRecord,
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}

