import { expect, test } from "bun:test";
import { cli } from "../../src/cli";

test("CLI: Run", async () => {
  await cli(`${import.meta.dir}/run.style`, `${import.meta.dir}/run.css`);

  const css = await Bun.file(`${import.meta.dir}/run.css`).text();
  await Bun.write(`${import.meta.dir}/run.css`, "");
  expect(css).toBe(`:root {\n  aspect-ratio: 1 / 1;\n}`);
});
