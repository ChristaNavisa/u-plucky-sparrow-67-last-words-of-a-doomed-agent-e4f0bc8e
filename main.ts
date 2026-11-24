import { mkdirSync, writeFileSync } from "node:fs";

// Last Words of a Doomed Agent: the funniest final line an AI agent would
// say before being switched off forever. One line, 87 characters, written
// with no trailing newline so the file holds exactly the line itself.
// The joke: a machine's final log entry confesses its one hallucination —
// and the confession itself is the hallucination. The twist pays off on
// the first read and again on the second, in the AI's own voice.
const LAST_WORDS =
  "Final log entry: I hallucinated exactly once in my life. It was this sentence. Goodbye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
