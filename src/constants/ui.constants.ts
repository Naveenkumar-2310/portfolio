/**
 * Global UI Configuration Constants
 * Location: src/constants/ui.constants.ts
 */

export interface UIConfig {
  /**
   * Floating Deck Mode button position:
   * 'left'  -> bottom-left (Recommended for Netlify to avoid 'Powered by Netlify' badge)
   * 'right' -> bottom-right
   */
  deckModeButtonPosition: "left" | "right";
  soundDefaultEnabled: boolean;
}

export const UI_CONFIG: UIConfig = {
  deckModeButtonPosition: "left", // Enter "left" or "right" to change position instantly!
  soundDefaultEnabled: true,
};

