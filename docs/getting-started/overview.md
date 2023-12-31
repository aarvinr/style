# Overview

!> **Style is still under development, and isn't usable for production yet.**

A simple &amp; practical CSS preprocessor, Style freshens CSS with new, more structured and concise syntax that lets you build better apps. You write your styles in our custom syntax, and then our compiler magically transforms it into highly optimized CSS that can run anywhere.

> Want to leap right in? Check out the [Quickstart](getting-started/quickstart.md).

## Syntax

Style is useful because it's what CSS should have been. By eliminating unnecessary syntax and providing new properties, Style gives you the ability to have far more concise code while keeping it readable and efficient. Take a look at a comparison between Style and vanilla CSS:

<!-- tabs:start -->

### **Style**

```css
:root {
  size: 20rem 100vh;
  text: black 2px bold;
  font: "Inter", system-ui, sans-serif;

  div {
    margin: 4rem 6rem;
    text: linear-gradient(to right, blue, red) 16px;
    border: solid 16px black;
  }
}
```

### **CSS**

```css
:root {
  width: 20rem;
  height: 100vh;
  color: black;
  font-size: 2px;
  font-weight: 600;
  font-family: "Inter", system-ui, sans-serif;

  div {
    margin: 4rem 6rem;
    color: transparent;
    background-image: linear-gradient(to right, blue, red);
    background-clip: text;
    font-size: 16px;
    border: solid 16px black;
  }
}
```

<!-- tabs:end -->

## Performance

Style is powered by a compiler, allowing for maximum speed. The compiler itself uses [`reworkcss/css`](https://github.com/reworkcss/css) to create an abstract syntax tree from your Style code, make transformations, and then turn the object back into code for use.

You use Style with [Bun](https://bun.sh/), a blazingly fast JavaScript runtime that's heavily optimized and provides a great DX, including TypeScript support out of the box. That allows for maximum performance, so that Style can compile your code in a matter of milliseconds.

### Benchmarks

Coming soon!
