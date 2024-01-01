/*
  accent: -> accent-color:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function accent(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "accent") {
        declaration.property = "accent-color";
      }
    });
  });

  return css;
}
