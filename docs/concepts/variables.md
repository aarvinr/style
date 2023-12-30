# Variables

Variables lets you reuse values across your styles, helpful when you have a preset that will be repeatedly used. To use variables, simply use the `$` prefix for a property in an element.

<!-- tabs:start -->

### **Style**

```css
:root {
  $theme-color: #fff000;
}
```

### **CSS**

```css
:root {
  --theme-color: #fff000;
}
```

<!-- tabs:end -->

It can then be used throughout your styles with the same `$` prefix.

<!-- tabs:start -->

### **Style**

```css
div {
  color: $theme-color;
}
```

### **CSS**

```css
div {
  color: --theme-color;
}
```

<!-- tabs:end -->
