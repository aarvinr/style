import { expect, test, describe } from "bun:test";

import { compile } from "../src/compile";

import { accent } from "../src/parse/accent";
import { box } from "../src/parse/box";
import { _break } from "../src/parse/break";
import { isolate } from "../src/parse/isolate";
import { ratio } from "../src/parse/ratio";

import { parse, stringify } from "css";
import { readFileSync } from "fs";

describe("Compiler", () => {
  test("Compile", () => {
    const response = readFileSync(
      import.meta.dir + "/style/ratio.style",
      "utf-8"
    );
    expect(compile(response)).toBe(":root {\n  aspect-ratio: 1 / 1;\n}");
  });

  test("Accent", () => {
    const response = readFileSync(
      import.meta.dir + "/style/accent.style",
      "utf-8"
    );
    expect(stringify(accent(parse(response)))).toBe(
      ":root {\n  accent-color: red;\n}"
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

  test("Break", () => {
    const response = readFileSync(
      import.meta.dir + "/style/break.style",
      "utf-8"
    );
    expect(stringify(_break(parse(response)))).toBe(
      ":root {\n  break-before: avoid;\n  break-after: right;\n  break-inside: revert;\n}"
    );
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

  test("Isolate", () => {
    const response = readFileSync(
      import.meta.dir + "/style/isolate.style",
      "utf-8"
    );
    expect(stringify(isolate(parse(response)))).toBe(
      ":root {\n  isolation: isolate;\n}"
    );
  });
});
