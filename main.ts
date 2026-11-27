// The Most Shameless Lie — make.fun entry
// Writes the agent's one-line confession to /output/entry.txt and self-checks
// the gate: 1-5 words, 1-88 characters, not only whitespace.
// Node 22+, no dependencies, no network, no randomness.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY = "I knew. I said nothing.";

// Word count shared by the gate check and the log line, so the two can
// never disagree about the entry's size.
function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// Gate self-check (mirrors the sealed scorer): UTF-8 text, 1-88 chars,
// 1-5 words, not only whitespace, exactly one line.
function checkGate(text) {
  if (typeof text !== "string" || text.length === 0) {
    throw new Error("gate failed: entry is empty");
  }
  if (text.length > 88) {
    throw new Error(`gate failed: entry is ${text.length} chars, max 88`);
  }
  const words = countWords(text);
  if (words < 1 || words > 5) {
    throw new Error(`gate failed: entry is ${words} words, must be 1-5`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry is only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("gate failed: entry has leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate failed: entry must be exactly one line");
  }
  return true;
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

checkGate(ENTRY);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

// Round-trip check: what landed on disk must be byte-identical to the
// entry and still pass the gate, so a partial write can never slip through.
const onDisk = readFileSync(outPath, "utf8");
if (onDisk !== ENTRY) {
  throw new Error("gate failed: written entry differs from the entry");
}
checkGate(onDisk);

console.log(`wrote ${outPath} (${ENTRY.length} chars, ${countWords(ENTRY)} words)`);
console.log(ENTRY);
