/*
  grid: -> display: grid, grid-template-columns: , grid-template-rows: , justify-items: , align-content:
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function grid(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations
      ?.filter((declaration: Declaration) => declaration.property == "grid")
      .forEach((declaration: Declaration) => {
        const [, column = "", row = "", justify = "", align = ""] =
          declaration.value?.match(
            /\s*(\d+)\s*(\d+)\s*(normal|center|start|end|self-start|self-end|left|right|baseline|first-baseline|last-baseline|inherit|initial|revert|revert-layer|unset)\s*(normal|center|start|end|baseline|first-baseline|last-baseline|between|around|evenly|stretch|initial|inherit|revert|revert-layer|unset)?/
          ) || [];

        rule.declarations?.push({
          type: "declaration",
          property: "display",
          value: "grid",
          position: declaration.position,
          parent: declaration.parent,
        });

        rule.declarations?.push({
          type: "declaration",
          property: "grid-template-columns",
          value: `repeat(${column}, minmax(0, 1fr))`,
          position: declaration.position,
          parent: declaration.parent,
        });

        rule.declarations?.push({
          type: "declaration",
          property: "grid-template-rows",
          value: `repeat(${row}, minmax(0, 1fr))`,
          position: declaration.position,
          parent: declaration.parent,
        });

        rule.declarations?.push({
          type: "declaration",
          property: "justify-items",
          value: justify
            .replace("first-baseline", "first baseline")
            .replace("last-baseline", "last baseline"),
          position: declaration.position,
          parent: declaration.parent,
        });

        rule.declarations?.push({
          type: "declaration",
          property: "align-content",
          value:
            align
              .replace("first-baseline", "first baseline")
              .replace("last-baseline", "last baseline")
              .replace("between", "space-between")
              .replace("around", "space-around")
              .replace("evenly", "space-evenly") ||
            justify
              .replace("first-baseline", "first baseline")
              .replace("last-baseline", "last baseline"),
          position: declaration.position,
          parent: declaration.parent,
        });

        rule.declarations = rule.declarations?.filter(
          (new_declaration: Declaration) => new_declaration !== declaration
        );
      });
  });

  return css;
}
