/*
  list: -> list-style:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function list(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "list") {
        declaration.property = "list-style";
      }
    });
  });

  return css;
}
