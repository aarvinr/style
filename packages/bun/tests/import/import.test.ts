import { expect, test } from "bun:test";

test("Plugin: Import", async () => {
  const { default: response } = await import("./import.style");
  expect(response).toBe(":root {\n  aspect-ratio: 1 / 1;\n}");
});
