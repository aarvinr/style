# Nesting

Nesting lets you easily filter styles by their parents. In the below example, the `div` selector only applies to `div`s within `:root`. This is similar to the behavior of the CSS `>` selector, but it's far more concise and lets you properly structure your CSS to mimic the structure of your content.

<!-- tabs:start -->

### **Style**

```css
:root {
  size: 100vw 100vh;

  div {
    size: 100vw 20vh;
  }
}
```

### **CSS**

```css
:root {
  size: 100vw 100vh;
}

:root > div {
  size: 100vw 20vh;
}
```

<!-- tabs:end -->
