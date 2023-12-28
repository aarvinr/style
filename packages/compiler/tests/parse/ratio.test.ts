import { expect, test } from "bun:test";

import { ratio } from "../../src/parse/ratio";
import { parse, stringify } from "css";
import { readFileSync } from "fs";

test("Compiler: Ratio", () => {
  const response = readFileSync(import.meta.dir + "/ratio.style", "utf-8");
  expect(stringify(ratio(parse(response)))).toBe(
    ":root {\n  aspect-ratio: 1 / 1;\n}"
  );
});
