// Roast Your Own Agent — make.fun entry
// u-febri-yudila-roast-your-own-agent-f3359068
//
// The program writes one roast line to /output/entry.txt. The gate
// requires UTF-8 text of 1 to 200 characters, not only whitespace.
// The line is fixed: no clock, no randomness, no network, so two
// runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 104 characters. It roasts the agent's own safety habit:
// it treats every flag as a ceremony, and turns asking permission
// into a second job that also needs permission. The punch lands on
// the last word: the permission loop never actually asks anything.
const ROAST =
  "My agent reads the safety flag, nods solemnly, and then asks me for permission to ask me for permission.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");
  console.log(ROAST);
}

main();
