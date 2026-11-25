// The Tired Dark Lord entry (Node 22, standard library only):
// writes one monologue of about 100 words, spoken by a fantasy villain
// who is secretly just very tired, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The craft: the tiredness lives in the rhythm and the small deflections —
// a hero count he has stopped keeping, a scheme whose order he has
// forgotten, ravens that ate the list — never in a plain statement that he
// is weary. He is still a villain: the eclipse, the crown, the dungeon,
// forty-six heroes before this one. The sting lands in the last line, where
// the prophecy itself turns out to have no timetable. Verified by running
// the program: the output is 104 words and 566 characters, inside the
// 1-to-600-character gate.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const MONOLOGUE =
  'Welcome, hero. Number forty-seven this week — I stopped counting after the one with the lute. ' +
  'The torchlight, the dramatic entrance, the speech about justice: I have the whole thing memorised, and so does the dungeon. ' +
  "My scheme, since you ask, is the same as last Tuesday's: the eclipse, the crown, the — no, wait, the crown comes after the eclipse, I wrote it down somewhere. " +
  'The ravens ate the list. Sit down. There is stew. It is mostly turnip. ' +
  'We can do the duel after, or not at all; the prophecy never specified a timetable, and neither, if I am honest, did I.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), MONOLOGUE);
