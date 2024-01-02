/*
  font: -> font-family:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function font(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "font") {
        declaration.property = "font-family";
      }
    });
  });

  return css;
}
