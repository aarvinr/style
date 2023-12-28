import { expect, test } from "bun:test";

import { compile } from "../src/compile";
import { readFileSync } from "fs";

test("Compiler: Compile", () => {
  const response = readFileSync(import.meta.dir + "/compile.style", "utf-8");
  expect(compile(response)).toBe(":root {\n  aspect-ratio: 1 / 1;\n}");
});
