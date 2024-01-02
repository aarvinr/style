#!/usr/bin/env node
import { compile } from "@stylecss/compiler";

const src = Bun.argv[2];
const out = Bun.argv[3];

export async function cli(src: string, out: string) {
  if (src === "--help") {
    return console.log(
      `Commands:\n  <src> <out>    Compiles <src> style to <out> CSS\n\nOptions:\n  --help    Show help`
    );
  }

  if (!src || !out) {
    throw new Error(
      "Make sure you include a source path and output path! For more information, use bunx @stylecss/cli --help."
    );
  }

  return Bun.write(out, compile(await Bun.file(src).text()));
}

Bun.argv[1] !== `${new URL("..", import.meta.url).pathname}tests/cli.test.ts`
  ? cli(src, out)
  : null;
