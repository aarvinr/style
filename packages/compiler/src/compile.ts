import { parse, stringify } from "css";

import { accent } from "./parse/accent";
import { animate } from "./parse/animate";
import { box } from "./parse/box";
import { _break } from "./parse/break";
import { isolate } from "./parse/isolate";
import { ratio } from "./parse/ratio";

export function compile(src: string): string {
  let css = parse(src);

  css = accent(css);
  css = animate(css);
  css = box(css);
  css = _break(css);
  css = isolate(css);
  css = ratio(css);

  return stringify(css);
}
