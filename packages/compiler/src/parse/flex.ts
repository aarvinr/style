/*
  flex: -> display: flex, flex-direction:, justify-content:, align-items:, flex-basis:, flex-wrap:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function flex(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations
      ?.filter((declaration: Declaration) => declaration.property == "flex")
      .forEach((declaration: Declaration) => {
        const [
          ,
          direction = "",
          justify = "",
          align = "",
          basis = "",
          wrap = "",
        ] =
          declaration.value?.match(
            /\s*(row|row-reverse|column|column-reverse|inherit|initial|revert|revert-layer|unset)\s*(normal|center|start|end|left|right|between|around|evenly|stretch|inherit|initial|revert|revert-layer|unset)\s*(normal|center|start|end|self-start|self-end|baseline|first-baseline|last-baseline|inherit|initial|revert|revert-layer|unset)?\s*(?:([-+]?\d*\.?\d+(?:%|px|em|rem|vh|vw|vmin|vmax|ex|ch|cm|mm|in|pt|pc)?)|auto|max|min|fit|content|inherit|initial|revert|revert-layer|unset)?\s*(wrap|nowrap|reverse|inherit|initial|revert|revert-layer|unset)?/
          ) || [];

        rule.declarations?.push({
          type: "declaration",
          property: "display",
          value: "flex",
          position: declaration.position,
          parent: declaration.parent,
        });

        rule.declarations?.push({
          type: "declaration",
          property: "flex-direction",
          value: direction,
          position: declaration.position,
          parent: declaration.parent,
        });

        rule.declarations?.push({
          type: "declaration",
          property: "justify-content",
          value: justify
            .replace("between", "space-between")
            .replace("around", "space-around")
            .replace("evenly", "space-evenly"),
          position: declaration.position,
          parent: declaration.parent,
        });

        rule.declarations?.push({
          type: "declaration",
          property: "align-items",
          value:
            align
              .replace("first-baseline", "first baseline")
              .replace("last-baseline", "last baseline") ||
            justify
              .replace("between", "space-between")
              .replace("around", "space-around")
              .replace("evenly", "space-evenly"),
          position: declaration.position,
          parent: declaration.parent,
        });

        if (basis) {
          rule.declarations?.push({
            type: "declaration",
            property: "flex-basis",
            value: basis,
            position: declaration.position,
            parent: declaration.parent,
          });
        }

        if (wrap) {
          rule.declarations?.push({
            type: "declaration",
            property: "flex-wrap",
            value: wrap,
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
