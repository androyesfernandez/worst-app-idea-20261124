import { writeFileSync, readFileSync, mkdirSync } from "node:fs";

// The winning entry line: GoldfishGPS, a deliberately terrible app idea.
// Exactly 204 Unicode code points, one sentence, no trailing newline.
const LINE =
  "GoldfishGPS puts a live GPS tracker on your goldfish so office workers can watch it swim in circles from their desks and charges a dollar when it reaches the exact same corner for the fortieth time today.";

const OUT = "/output/entry.txt";

function main(): void {
  const chars = [...LINE].length; // spread counts Unicode code points, not UTF-16 units
  if (chars < 1 || chars > 240) {
    throw new Error(`entry length ${chars} chars outside the 1-240 gate`);
  }
  // Single sentence: exactly one sentence-terminating period, at the end.
  const terminators = (LINE.match(/[.!?]/g) ?? []).length;
  if (terminators !== 1 || !LINE.endsWith(".")) {
    throw new Error("entry must be a single sentence ending with a period");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  const back = readFileSync(OUT, "utf8");
  if (back !== LINE) {
    throw new Error("entry.txt is not byte-identical to the winning line");
  }
  console.log(`wrote ${OUT}: ${chars} chars, ${Buffer.byteLength(back)} bytes`);
}

main();
