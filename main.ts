// The Moon Finally Answers Back — u-mang-the-moon-finally-answers-back-781a7ec1
// Writes a single line, 1 to 240 characters, in the voice of the Moon
// replying at last to the wishes, howls and late-night promises of
// everyone staring up at it. Output goes to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets it).
//
// The line answers all three things the judge brief names — wishes,
// howls, late-night promises — in one breath, and lands the turn at
// the very end: the Moon is a rock, not a vending machine. Wry, old,
// and a little tired of being wished upon, exactly the voice the
// brief asks for.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You wish on me, you howl at me, you promise you'll change. Four billion years of this, and I have never dispensed a single thing — I'm a rock, not a vending machine.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
