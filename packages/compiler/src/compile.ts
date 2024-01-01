import { parse, stringify } from "css";

import { accent } from "./parse/accent";
import { animate } from "./parse/animate";
import { background_blend } from "./parse/background-blend";
import { box } from "./parse/box";
import { _break } from "./parse/break";
import { caret } from "./parse/caret";
import { isolate } from "./parse/isolate";
import { ratio } from "./parse/ratio";

export function compile(src: string): string {
  let css = parse(src);

  css = accent(css);
  css = animate(css);
  css = background_blend(css);
  css = box(css);
  css = _break(css);
  css = caret(css);
  css = isolate(css);
  css = ratio(css);

  return stringify(css);
}
