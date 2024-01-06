/*
  break: -> break-after:, break-before:, break-inside:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function _break(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations
      ?.filter((declaration: Declaration) => declaration.property == "break")
      .forEach((declaration: Declaration) => {
        rule.declarations?.push({
          type: "declaration",
          property: "break-before",
          value: declaration.value?.split(" ")[0],
          position: declaration.position,
          parent: declaration.parent,
        });

        if (declaration.value?.split(" ")[1]) {
          rule.declarations?.push({
            type: "declaration",
            property: "break-after",
            value: declaration.value.split(" ")[1],
            position: declaration.position,
            parent: declaration.parent,
          });
        }

        if (declaration.value?.split(" ")[2]) {
          rule.declarations?.push({
            type: "declaration",
            property: "break-inside",
            value: declaration.value.split(" ")[2],
            position: declaration.position,
            parent: declaration.parent,
          });
        }

        rule.declarations = rule.declarations?.filter(
          (new_declaration: Declaration) => new_declaration !== declaration
        );
      });
  });

  return css;
}
