/*
  overscroll: -> overscroll-behavior:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function overscroll(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "overscroll") {
        declaration.property = "overscroll-behavior";
      }
    });
  });

  return css;
}
