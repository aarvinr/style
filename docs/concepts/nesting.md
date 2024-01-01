# Nesting

Style comes with full support for CSS nesting, which lets you easily filter styles by their parents. In the below example, the `div` selector only applies to `div`s within `:root`. This lets you properly structure your CSS to mimic the structure of your content, which can be useful for readability.

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

  div {
    margin-left: 14vw;
  }
}
```

<!-- tabs:end -->
