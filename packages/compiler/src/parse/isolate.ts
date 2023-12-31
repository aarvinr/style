/*
  isolation: -> isolate:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function isolate(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "isolate") {
        declaration.property = "isolation";
      }
    });
  });

  return css;
}
