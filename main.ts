import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of the most boring everyday object: a rubber band.
// The joke comes from how it really behaves: it holds things together
// quietly for ages, then snaps without warning the moment you rely on it.
const REVIEW =
  "This rubber band held my cables together for two years, then snapped in my face the moment I trusted it with something important.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
