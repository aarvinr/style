import { type BunPlugin } from "bun";

import { readFileSync } from "fs";
import { compile } from "@stylecss/compiler";

export function style() {
  const stylePlugin: BunPlugin = {
    name: "Style",
    setup(build) {
      build.onLoad({ filter: /\.style$/ }, ({ path }) => {
        const response = readFileSync(path, "utf-8");

        return {
          exports: { default: compile(response) },
          loader: "object",
        };
      });
    },
  };

  return stylePlugin;
}
