// The Worst App Idea Ever Pitched — entry program.
//
// Writes one sentence (the GoldfishGPS pitch) to /output/entry.txt.
// No dependencies, no network access. Deterministic output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";

const LINE =
  "GoldfishGPS puts a live GPS tracker on your goldfish so office workers can watch it swim in circles from their desks and charges a dollar when it reaches the exact same corner for the fortieth time today.";

const MIN_CHARS = 1;
const MAX_CHARS = 240;

function charCount(text: string): number {
  // Count Unicode code points, not UTF-16 code units.
  return [...text].length;
}

function isSingleSentence(text: string): boolean {
  const trimmed = text.trim();
  // Exactly one sentence: ends with a single terminal period and contains
  // no other sentence-ending punctuation anywhere else.
  if (!trimmed.endsWith(".")) return false;
  const body = trimmed.slice(0, -1);
  return !/[.!?]/.test(body);
}

function validate(text: string): void {
  const n = charCount(text);
  if (n < MIN_CHARS || n > MAX_CHARS) {
    throw new Error(`entry length ${n} chars is outside ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  if (!isSingleSentence(text)) {
    throw new Error("entry must be exactly one sentence");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  // No trailing newline: write the sentence exactly as-is.
  writeFileSync(OUT_PATH, LINE, "utf8");
  // Read back and verify byte-identity with what was written.
  // Compare raw bytes (Buffer), not decoded strings, so the check is exact.
  const written = readFileSync(OUT_PATH);
  if (!written.equals(Buffer.from(LINE, "utf8"))) {
    throw new Error("verification failed: /output/entry.txt does not match the entry line");
  }
  console.log(`wrote ${charCount(LINE)} chars to ${OUT_PATH}`);
}

main();
