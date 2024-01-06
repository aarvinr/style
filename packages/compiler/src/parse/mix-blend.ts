/*
  mix-blend: -> mix-blend-mode:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function mix_blend(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "mix-blend") {
        declaration.property = "mix-blend-mode";
      }
    });
  });

  return css;
}
