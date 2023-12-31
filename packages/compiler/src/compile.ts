import { parse, stringify } from "css";

import { ratio } from "./parse/ratio";
import { _break } from "./parse/break";

export function compile(src: string): string {
  let css = parse(src);

  css = ratio(css);
  css = _break(css);

  return stringify(css);
}
