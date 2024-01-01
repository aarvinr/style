import { expect, test, describe } from "bun:test";

import { compile } from "../src/compile";

import { accent } from "../src/parse/accent";
import { animate } from "../src/parse/animate";
import { background_blend } from "../src/parse/background-blend";
import { box } from "../src/parse/box";
import { _break } from "../src/parse/break";
import { caret } from "../src/parse/caret";
import { color_adjust } from "../src/parse/color-adjust";
import { decorate } from "../src/parse/decorate";
import { flex } from "../src/parse/flex";
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

  test("Animate", () => {
    const response = readFileSync(
      import.meta.dir + "/style/animate.style",
      "utf-8"
    );
    expect(stringify(animate(parse(response)))).toBe(
      ":root {\n  animation: 3s linear 1s slidein;\n}"
    );
  });

  test("Background-Blend", () => {
    const response = readFileSync(
      import.meta.dir + "/style/background-blend.style",
      "utf-8"
    );
    expect(stringify(background_blend(parse(response)))).toBe(
      ":root {\n  background-blend-mode: darken, luminosity;\n}"
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

  test("Caret", () => {
    const response = readFileSync(
      import.meta.dir + "/style/caret.style",
      "utf-8"
    );
    expect(stringify(caret(parse(response)))).toBe(
      ":root {\n  caret-color: red;\n}"
    );
  });

  test("Color-Adjust", () => {
    const response = readFileSync(
      import.meta.dir + "/style/color-adjust.style",
      "utf-8"
    );
    expect(stringify(color_adjust(parse(response)))).toBe(
      ":root {\n  forced-color-adjust: auto;\n}"
    );
  });

  test("Decorate", () => {
    const response = readFileSync(
      import.meta.dir + "/style/decorate.style",
      "utf-8"
    );
    expect(stringify(decorate(parse(response)))).toBe(
      ":root {\n  text-decoration: underline overline #FF3028;\n}"
    );
  });

  test("Flex", () => {
    const response = readFileSync(
      import.meta.dir + "/style/flex.style",
      "utf-8"
    );
    expect(stringify(flex(parse(response)))).toBe(
      ":root {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: end;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: start;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: unset;\n  align-items: unset;\n  flex-basis: 50%;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-around;\n  align-items: baseline;\n  flex-basis: 20em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: first baseline;\n  flex-basis: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: stretch;\n  flex-basis: 2;\n  flex-wrap: wrap;\n  display: flex;\n  flex-direction: row;\n  justify-content: initial;\n  align-items: inherit;\n  flex-basis: 20%;\n  flex-wrap: nowrap;\n}"
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

  test("Ratio", () => {
    const response = readFileSync(
      import.meta.dir + "/style/ratio.style",
      "utf-8"
    );
    expect(stringify(ratio(parse(response)))).toBe(
      ":root {\n  aspect-ratio: 1 / 1;\n}"
    );
  });
});
