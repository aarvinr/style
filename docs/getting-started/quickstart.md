# Quickstart

This quickstart will get the Style compiler running in your project as fast as possible.

## Installation

Style is available for a large number of popular frameworks, as well as a Bun plugin or the CLI for everything else.

### CLI

If Style isn't available for your specific framework, or you're choosing not to use one (or Bun), you can use the Style CLI. Simply run the script from the package [`@stylecss/cli`](https://npmjs.com/@stylecss/cli), including the `<source>` path (file containing Style syntax) and an `<output>` path, where the compiled CSS will be written to.

```bash
bunx @stylecss/cli ./main.style ./main.css
```

If you ever forget the command, just use the standard `--help` flag.

```bash
bunx @stylecss/cli --help
```

### Bun

If you're using the [Bun runtime](https://bun.sh/), you can make use of the Bun plugin. When using the plugin, anytime you use an `import` statement for a `.style` file, the file have a a default export containing a string with the compiled CSS. To use the plugin, install it and register it as a plugin for your project:

```bash
bun add -D @stylecss/bun
```

**bunfig.ts**

```js
import { plugin } from "bun";
import { style } from "@stylecss/bun";

plugin(style());
```

**bunfig.toml**

```toml
preload = "./bunfig.ts"
```

You can then use the plugin by importing `.style` files in your JS/TS:

```js
import styles from "./main.style";

console.log(styles); // returns string with compiled CSS
```

### Next

Coming soon!

### Nuxt

Coming soon!

### SvelteKit

Coming soon!

### Astro

Coming soon!

## Next Steps

You're now ready to use Style in your website! Next, check out some of [core concepts](concepts/overview.md), and then feel free to check the [properties documentation](properties/overview.md) whenever you need to check what property is best to use.
