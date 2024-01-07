/*
  object: -> object-fit:, object-position:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function object(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations
      ?.filter((declaration: Declaration) => declaration.property == "object")
      .forEach((declaration: Declaration) => {
        rule.declarations?.push({
          type: "declaration",
          property: "object-fit",
          value: declaration.value?.split(" ")[0],
          position: declaration.position,
          parent: declaration.parent,
        });

        if (declaration.value?.split(" ")[1]) {
          rule.declarations?.push({
            type: "declaration",
            property: "object-position",
            value: declaration.value.replace(
              declaration.value.split(" ")[0] + " ",
              ""
            ),
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
