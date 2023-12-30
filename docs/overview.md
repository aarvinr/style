!> **Style is still under development, and isn't usable for production yet.**

Style is a simple & practical CSS preprocessor. You write your styles in our custom syntax, and then our compiler magically transforms it into highly optimized CSS that can run anywhere. You can use Style with all your favorite frameworks, or use the Bun plugin or CLI everywhere else.

> Want to leap right in? Check out the [Quickstart](quickstart.md).

## Syntax

Style is useful because it's what CSS should have been. By eliminating unnecessary syntax and providing new properties, Style gives you the ability to have far more concise code while keeping it readable and efficient. Just take a look at this comparison between regular Style and CSS:

```css
/* Style */

:root {
  size: 20rem 100vh;
  text: black 2px bold;
  font: "Inter", system, sans;

  div {
    margin: 4rem 6rem;
    text: linear-gradient(to right, blue, red) 16px;
    border: black 16px solid;
  }
}

/* CSS */

:root {
  width: 20rem;
  height: 100vh;
  color: black;
  font-size: 2px;
  font-weight: 600;
  font-family: "Inter", system-ui, sans-serif;
}

:root > div {
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top: 6rem;
  margin-bottom: 6rem;
  color: transparent;
  background-image: linear-gradient(to right, blue, red);
  background-clip: text;
  font-size: 16px;
  border-style: solid;
  border-width: 16px;
  border-color: black;
}
```

## Performance

Style is powered by a compiler, allowing for maximum speed. The compiler itself uses [`rework/css`](https://github.com/rework/css) to create an abstract syntax tree from your Style code, make transformations, and then turn back into code for use.

We recommend using Style with [Bun](https://bun.sh/), a blazingly fast JavaScript runtime that's heavily optimized and provides a great DX, including TypeScript support out of the box. That being said, you can still use Style with Node.jsa and get great performance.

### Benchmarks

Coming soon!