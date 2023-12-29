# style

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aarvinr/style)
[![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/org/stylecss)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/aarvinr/style/actions)

A simple &amp; practical CSS preprocessor, Style freshens CSS with new, more structured and concise syntax that lets you build better apps. Then, once your app is ready, Style instantly compiles it to optimized & minified CSS that can be used anywhere.

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

## Installation

Coming soon! Stay tuned by checking out our [releases so far](https://github.com/aarvinr/style/releases).
