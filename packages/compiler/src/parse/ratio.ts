/*
  ratio: -> aspect-ratio:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function ratio(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "ratio") {
        declaration.property = "aspect-ratio";
      }
    });
  });

  return css;
}
