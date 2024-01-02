import { expect, test, describe, afterEach } from "bun:test";
import { cli } from "../bin/cli";

describe("CLI", () => {
  afterEach(async () => {
    await Bun.write(
      `${import.meta.dir}/styles/run.style`,
      ":root {\n  ratio: 1 / 1;\n}"
    );
  });

  test("Run", async () => {
    await cli(
      `${import.meta.dir}/styles/run.style`,
      `${import.meta.dir}/styles/run.style`
    );
    expect(await Bun.file(`${import.meta.dir}/styles/run.style`).text()).toBe(
      ":root {\n  aspect-ratio: 1 / 1;\n}"
    );
  });
});
