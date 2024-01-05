/*
  letter: -> letter-spacing:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function letter(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "letter") {
        declaration.property = "letter-spacing";
      }
    });
  });

  return css;
}
