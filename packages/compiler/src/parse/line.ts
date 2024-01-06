/*
  line: -> line-height:, overflow: hidden, display: -webkit-box, -webkit-box-orient: vertical, -webkit-line-clamp
*/

import type { Declaration, Rule, Stylesheet } from "css";

export function line(src: Stylesheet): Stylesheet {
  let css = src;

  src.stylesheet?.rules.forEach((rule: Rule) => {
    rule.declarations
      ?.filter((declaration: Declaration) => declaration.property == "line")
      .forEach((declaration: Declaration) => {
        rule.declarations?.push({
          type: "declaration",
          property: "line-height",
          value: declaration.value?.split(" ")[0],
          position: declaration.position,
          parent: declaration.parent,
        });

        if (declaration.value?.split(" ")[1]) {
          rule.declarations?.push({
            type: "declaration",
            property: "overflow",
            value: "hidden",
            position: declaration.position,
            parent: declaration.parent,
          });

          rule.declarations?.push({
            type: "declaration",
            property: "display",
            value: "-webkit-box",
            position: declaration.position,
            parent: declaration.parent,
          });

          rule.declarations?.push({
            type: "declaration",
            property: "-webkit-box-orient",
            value: "vertical",
            position: declaration.position,
            parent: declaration.parent,
          });

          rule.declarations?.push({
            type: "declaration",
            property: "-webkit-line-clamp",
            value: declaration.value.split(" ")[1],
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
