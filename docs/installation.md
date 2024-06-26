# 安装依赖

安装tailwindcss所需项目依赖，并生成`tailwind.config.js`和`postcss.config.js`

```
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 配置文件修改

在`tailwind.config.js`文件中添加代码

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 创建css文件

`./src/assets/css/index.css`

```css
/* ./src/assets/css/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 导入css文件

```ts
import 'mars3d-cesium/Build/Cesium/Widgets/widgets.css'
import './assets/css/index.css' // [!code focus]
const app = createApp(App)
app.mount('#app')
document.title = import.meta.env.VITE_PROJ_TITLE
```

## VSCode 插件

还需要在 VS Code 中再安装 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
插件获得丰富的 Tailwind CSS 代码提示。

至此，大功告成。

<!-- ### Input

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

### Output

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
::: -->
<!-- 
## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown). -->
