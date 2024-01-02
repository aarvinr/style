# Box

The `flex` property can be used as an alias for `flex-direction`, `justify-content`, `align-items`, `flex-basis`, and `flex-wrap`, and also sets `display` to `flex`. The `align-items`, `flex-basis`, and `flex-wrap` are optional - if `align-items` is not provided, it will be set to the same value as `justify-content`.

In addition, you can use `between`, `around` and `evenly` instead of `space-between`, `space-around`, and `space-evenly` for `justify-content`, and `first-baseline` and `last-baseline` instead of `first baseline` and `last baseline` for `align-items`.

<!-- tabs:start -->

### **Style**

```css
:root {
  flex: column end;
  flex: row center start;
  flex: column-reverse unset 50%;
  flex: row-reverse around baseline 20em;
  flex: column evenly first-baseline 16px;
  flex: column stretch 2 wrap;
  flex: row initial inherit 20% nowrap;
}
```

### **CSS**

```css
:root {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;

  display: flex;
  flex-direction: column-reverse;
  justify-content: unset;
  align-items: unset;
  flex-basis: 50%;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: baseline;
  flex-basis: 20em;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: first baseline;
  flex-basis: 16px;

  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  flex-basis: 2;
  flex-wrap: wrap;

  display: flex;
  flex-direction: row;
  justify-content: initial;
  align-items: inherit;
  flex-basis: 20%;
  flex-wrap: nowrap;
}
```

<!-- tabs:end -->
