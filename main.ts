import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My agent burned twelve tool calls, skimmed three docs, then confidently returned the answer already in my prompt.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
