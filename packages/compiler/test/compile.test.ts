import { expect, test, describe } from "bun:test";

import { compile } from "../src/compile";
import { ratio } from "../src/parse/ratio";
import { _break } from "../src/parse/break";

import { parse, stringify } from "css";
import { readFileSync } from "fs";
import { box } from "../src/parse/box";

describe("Compiler", () => {
  test("Compile", () => {
    const response = readFileSync(
      import.meta.dir + "/style/ratio.style",
      "utf-8"
    );
    expect(compile(response)).toBe(":root {\n  aspect-ratio: 1 / 1;\n}");
  });

  test("Ratio", () => {
    const response = readFileSync(
      import.meta.dir + "/style/ratio.style",
      "utf-8"
    );
    expect(stringify(ratio(parse(response)))).toBe(
      ":root {\n  aspect-ratio: 1 / 1;\n}"
    );
  });

  test("Break", () => {
    const response = readFileSync(
      import.meta.dir + "/style/break.style",
      "utf-8"
    );
    expect(stringify(_break(parse(response)))).toBe(
      ":root {\n  break-before: avoid;\n  break-after: right;\n  break-inside: revert;\n}"
    );
  });

  test("Box", () => {
    const response = readFileSync(
      import.meta.dir + "/style/box.style",
      "utf-8"
    );
    expect(stringify(box(parse(response)))).toBe(
      ":root {\n  box-sizing: border-box;\n  box-decoration-break: clone;\n  box-decoration-break: slice;\n}"
    );
  });
});
