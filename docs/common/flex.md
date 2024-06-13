# Flex布局

`flex`布局是我们在项目中使用比较多的布局方式,以`左贡`代码为例

```css
.pipe-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

这里通过flex竖向布局，每个元素间距为8px。

如果使用tailwindcss，那么等效代码为

```html
<div class="flex flex-col space-y-2"></div>
```

显而易见的是, tailwindcss的书写更为简洁高效，同时节省了代码行数，让外人看起来更`钻业`

## 其他常用的参数

`shrink-0` 等效为 `flex-shrink: 0`
`shrink` 等效为 `flex-shrink： 1`

`flex-grow` 同理