import { expect, test } from "bun:test";
import { exec } from "child_process";

test("CLI: Run", async () => {
  await exec(
    `bun run ./src/cli.ts ${import.meta.dir}/run.style ${
      import.meta.dir
    }/run.css`
  );

  expect(await Bun.file(`${import.meta.dir}/run.css`).text()).toBe(
    `:root {\n  aspect-ratio: 1 / 1;\n}`
  );

  await Bun.write(`${import.meta.dir}/run.css`, "");
});
