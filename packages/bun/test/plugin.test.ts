/// <reference path="../src/plugin.d.ts" />

import { expect, test, describe, beforeAll } from "bun:test";
import { plugin } from "bun";

import { style } from "../src/plugin";

describe("Bun", () => {
  beforeAll(() => {
    plugin(style());
  });

  test("Import", async () => {
    const { default: response } = await import("./style/import.style");
    expect(response).toBe(":root {\n  aspect-ratio: 1 / 1;\n}");
  });
});
