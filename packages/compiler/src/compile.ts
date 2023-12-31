import { parse, stringify } from "css";

import { box } from "./parse/box";
import { _break } from "./parse/break";
import { ratio } from "./parse/ratio";

export function compile(src: string): string {
  let css = parse(src);

  css = box(css);
  css = _break(css);
  css = ratio(css);

  return stringify(css);
}
