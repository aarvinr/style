/*
  background-blend: -> background-blend-mode:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function background_blend(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "background-blend") {
        declaration.property = "background-blend-mode";
      }
    });
  });

  return css;
}
