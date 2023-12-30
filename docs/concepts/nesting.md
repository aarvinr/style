# Nesting

Nesting lets you mimic the structure of your content in your styles. In the below example, the `div` selector only applies to `div`s within `:root`. This is similar to the behavior of the CSS `>` selector.

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
