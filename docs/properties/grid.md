# Grid

The `grid` property can be used as an alias for `grid-template-columns`, `grid-template-rows`, `justify-items`, and `align-content`, and also sets `display` to `grid`. The `align-content`, is optional - if `align-content` is not provided, it will be set to the same value as `justify-items`.

In addition, you can use `between`, `around` and `evenly` instead of `space-between`, `space-around`, and `space-evenly` for `align-content`, and `first-baseline` and `last-baseline` instead of `first baseline` and `last baseline` for `justify-items` and `align-content`.

<!-- tabs:start -->

### **Style**

```css
:root {
  grid: 1 1 center;
  grid: 3 4 left first-baseline;
}
```

### **CSS**

```css
:root {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));
  justify-items: center;
  align-content: center;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  justify-items: left;
  align-content: first baseline;
}
```

<!-- tabs:end -->
