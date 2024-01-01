/*
  caret: -> caret-color:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function caret(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "caret") {
        declaration.property = "caret-color";
      }
    });
  });

  return css;
}
