import { expect, test, describe, afterEach } from "bun:test";
import { cli } from "../src/cli";

describe("CLI", () => {
  afterEach(async () => {
    await Bun.write(
      `${import.meta.dir}/cli.style`,
      ":root {\n  ratio: 1 / 1;\n}"
    );
  });

  test("Run", async () => {
    await cli(`${import.meta.dir}/cli.style`, `${import.meta.dir}/cli.style`);
    expect(await Bun.file(`${import.meta.dir}/cli.style`).text()).toBe(
      ":root {\n  aspect-ratio: 1 / 1;\n}"
    );
  });
});
