/*
  box: -> box-sizing:, box-decoration-break:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function box(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations
      ?.filter((declaration: Declaration) => declaration.property == "box")
      .forEach((declaration: Declaration) => {
        const [, sizing = "", decoration = ""] =
          declaration.value?.match(
            /\s*(border|content|inherit|initial|revert|revert-layer|unset)?\s*(clone|slice|inherit|initial|revert|revert-layer|unset)?\s*/
          ) || [];

        if (sizing) {
          rule.declarations?.push({
            type: "declaration",
            property: "box-sizing",
            value: sizing
              .replace("border", "border-box")
              .replace("content", "content-box"),
            position: declaration.position,
            parent: declaration.parent,
          });
        }

        if (decoration) {
          rule.declarations?.push({
            type: "declaration",
            property: "box-decoration-break",
            value: decoration,
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
