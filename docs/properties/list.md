# List

The `list` property can be used as an alias for `list-style`. It can be used to set `list-style-type`, `list-style-image`, and `list-style-position`.

<!-- tabs:start -->

### **Style**

```css
:root {
  list: square;
  list: url("/media/examples/rocket.svg");
  list: georgian outside url("/non-existent.svg");
}
```

### **CSS**

```css
:root {
  list-style: square;
  list-style: url("/media/examples/rocket.svg");
  list-style: georgian outside url("/non-existent.svg");
}
```

<!-- tabs:end -->
