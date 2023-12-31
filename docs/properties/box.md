# Box

The `box` property can be used as an alias for `box-sizing` and `box-decoration-break`. In addition, you can use `border` and `content` instead of `border-box` and `content-box` for `box-sizing`.

<!-- tabs:start -->

### **Style**

```css
:root {
  box: border clone;
  box: slice;
}
```

### **CSS**

```css
:root {
  box-sizing: border-box;
  box-decoration-break: clone;

  box-decoration-break: slice;
}
```

<!-- tabs:end -->
