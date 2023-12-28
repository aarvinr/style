import { compile } from "@stylecss/compiler";

const src = Bun.argv[2];
const out = Bun.argv[3];

async function cli(src: string, out: string) {
  if (src === "--help" || src === "-h") {
    return console.log(
      `\nWelcome to the Style CLI! To use it, simply pass a path with your source .style file, and a path for your output CSS:\nbunx @stylecss/cli source.style output.css`
    );
  }

  if (src === "" || out === "") {
    return console.error(
      "Make sure you include a src path and out path! For more information, use bunx @stylecss/cli --help."
    );
  }

  return Bun.write(out, compile(await Bun.file(src).text()));
}

cli(src, out);
