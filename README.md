# style

A simple &amp; practical CSS preprocessor, Style freshens CSS with new, more structured & concise syntax that lets you build better apps. Then, once your app is ready, Style instantly compiles it to optimized & minified CSS that can be used anywhere.

```css
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

/* as compared to vanilla CSS */

:root {
  width: 20rem;
  height: 100vh;
  color: black;
  font-size: 2px;
  font-weight: 600;
  font-family: "Inter", system-ui, sans-serif;
}

:root > div {
  margin: 4rem 6rem;
  color: transparent;
  background-image: linear-gradient(to right, blue, red);
  background-clip: text;
  font-size: 16px;
  border-style: solid;
  border-width: 16px;
  border-color: black;
}
```

## Installation

Coming soon! Stay tuned by checking out our [releases so far](https://github.com/aarvinr/style/releases).
