# 動態載入

+ [lazy](https://react.dev/reference/react/lazy)

延遲載入 ( Lazy Loading ) 是基於引用函數 ( import function ) 的動態載入函數，其功用是在第一次繪製該元件時才會執行載入動作。

依據文件說明，lazy 需要提供執行載入的函數，此函數應為一個 Promise 函數或 Promise like 的相似函數，此函數在宣告時不會執行，直到第一次繪製時才會執行；在載入延遲期間，可以使用 ```<Suspense>``` 顯示載入指示元件。

需注意，lazy 元件宣告不可在元件或函數之內，其應在模組 ( module ) 的上層。

# 分離程式碼

延遲載入是有效分離程式碼的方案，在原理上引用函數 ( import function ) 是額外載入目標程式碼，對此框架會基於此將元件分離為單一檔案。

本專案實際執行編譯，利用 ```react build --repo=lazy``` 執行後，可以看到如下描述。

```
vite v6.0.7 building for production...
✓ 35 modules transformed.
dist/index.html                            0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg             4.13 kB │ gzip:  2.05 kB
dist/assets/index-n_ryQ3BS.css             1.39 kB │ gzip:  0.71 kB
dist/assets/MarkdownPreview-3zg8LHL8.js   46.97 kB │ gzip: 14.16 kB
dist/assets/index-CuUhBuVB.js            145.38 kB │ gzip: 47.11 kB
✓ built in 1.30s
```

對此，由於 ```MarkdownPreview``` 是延遲仔入的內容，因此改元件從 index 獨立成一個檔案，開發應藉由此方式逐步降低 index 內的程式碼數量。 

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
