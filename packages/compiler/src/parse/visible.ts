/*
  visible: -> visibility:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function visible(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "visible") {
        declaration.property = "visibility";
      }
    });
  });

  return css;
}
