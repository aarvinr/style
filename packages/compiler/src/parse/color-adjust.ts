/*
  color-adjust: -> forced-color-adjust:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function color_adjust(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "color-adjust") {
        declaration.property = "forced-color-adjust";
      }
    });
  });

  return css;
}
