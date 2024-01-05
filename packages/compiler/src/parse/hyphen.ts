/*
  hyphen: -> hyphens:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function hyphen(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "hyphen") {
        declaration.property = "hyphens";
      }
    });
  });

  return css;
}
