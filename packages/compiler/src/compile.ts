import { parse, stringify } from "css";

import { accent } from "./parse/accent";
import { animate } from "./parse/animate";
import { background_blend } from "./parse/background-blend";
import { box } from "./parse/box";
import { _break } from "./parse/break";
import { caret } from "./parse/caret";
import { color_adjust } from "./parse/color-adjust";
import { decorate } from "../src/parse/decorate";
import { flex } from "./parse/flex";
import { font } from "./parse/font";
import { grid } from "./parse/grid";
import { hyphen } from "./parse/hyphen";
import { isolate } from "./parse/isolate";
import { letter } from "./parse/letter";
import { line } from "./parse/line";
import { list } from "./parse/list";
import { mix_blend } from "./parse/mix-blend";
import { ratio } from "./parse/ratio";

export function compile(src: string): string {
  let css = parse(src);

  css = accent(css);
  css = animate(css);
  css = background_blend(css);
  css = box(css);
  css = _break(css);
  css = caret(css);
  css = color_adjust(css);
  css = decorate(css);
  css = flex(css);
  css = font(css);
  css = grid(css);
  css = hyphen(css);
  css = isolate(css);
  css = letter(css);
  css = line(css);
  css = list(css);
  css = mix_blend(css);
  css = ratio(css);

  return stringify(css);
}
