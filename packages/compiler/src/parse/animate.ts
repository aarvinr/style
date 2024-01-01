/*
  animate: -> animation:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function animate(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations?.forEach((declaration: Declaration) => {
      if (declaration.property === "animate") {
        declaration.property = "animation";
      }
    });
  });

  return css;
}
