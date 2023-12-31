# Nesting

Nesting lets you easily filter styles by their parents. In the below example, the `div` selector only applies to `div`s within `:root`. This is similar to the behavior of the CSS `>` selector, but it's far more concise and lets you properly structure your CSS to mimic the structure of your content.

<!-- tabs:start -->

### **Style**

```css
:root {
  margin-top: 20vh;

  div {
    margin-left: 14vw;
  }
}
```

### **CSS**

```css
:root {
  margin-top: 20vh;
}

:root > div {
  margin-left: 14vw;
}
```

<!-- tabs:end -->
