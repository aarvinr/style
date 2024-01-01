/*
  decorate: -> text-decoration:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function decorate(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "decorate") {
        declaration.property = "text-decoration";
      }
    });
  });

  return css;
}
