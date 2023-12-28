import { parse, stringify } from "css";

import { ratio } from "./parse/ratio";

export function compile(src: string): string {
  let css = parse(src);

  css = ratio(css);

  return stringify(css);
}
