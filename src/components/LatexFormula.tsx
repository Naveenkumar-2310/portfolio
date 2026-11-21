"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface LatexFormulaProps {
  formula: string;
  className?: string;
}

export default function LatexFormula({ formula, className = "" }: LatexFormulaProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(formula, {
        throwOnError: false,
        displayMode: true,
      });
    } catch {
      return formula;
    }
  }, [formula]);

  return (
    <div
      className={`text-cyan-200 select-all overflow-x-auto py-2 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

