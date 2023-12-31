import { expect, test, describe, afterEach } from "bun:test";
import { cli } from "../src/cli";

describe("CLI", () => {
  afterEach(async () => {
    await Bun.write(
      `${import.meta.dir}/style/run.style`,
      ":root {\n  ratio: 1 / 1;\n}"
    );
  });

  test("Run", async () => {
    await cli(
      `${import.meta.dir}/style/run.style`,
      `${import.meta.dir}/style/run.style`
    );
    expect(await Bun.file(`${import.meta.dir}/style/run.style`).text()).toBe(
      ":root {\n  aspect-ratio: 1 / 1;\n}"
    );
  });
});
