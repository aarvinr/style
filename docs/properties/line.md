# Line

The `line` property can be used as an alias for `line-height` and `-webkit-line-clamp`.

<!-- tabs:start -->

### **Style**

```css
:root {
  line: 3rem;
  line: 2px 4;
}
```

### **CSS**

```css
:root {
  line-height: 3rem;

  line-height: 2px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
```

<!-- tabs:end -->
