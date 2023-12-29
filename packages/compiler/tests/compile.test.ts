import { expect, test, describe } from "bun:test";

import { compile } from "../src/compile";
import { ratio } from "../src/parse/ratio";

import { parse, stringify } from "css";
import { readFileSync } from "fs";

describe("Compiler", () => {
  test("Compile", () => {
    const response = readFileSync(import.meta.dir + "/compile.style", "utf-8");
    expect(compile(response)).toBe(":root {\n  aspect-ratio: 1 / 1;\n}");
  });

  test("Ratio", () => {
    const response = readFileSync(import.meta.dir + "/styles/ratio.style", "utf-8");
    expect(stringify(ratio(parse(response)))).toBe(
      ":root {\n  aspect-ratio: 1 / 1;\n}"
    );
  });
});
