# 服務

任何用戶端網頁不應該在用戶介面提取資料，而是透過服務管理取得的資料，並以此確保可以透過替換虛假資料 ( fake data ) 來進行驗證。

本專案基於[React + Typescript 應用程式](../base-ts/README.md)為基礎設計後續功能。

原則上 React 框架僅專注於使用者介面的設計，對於業務邏輯的服務設計應基於 JavaScript 或 TypeScript 為基礎設計。

## 建立 mock 資料

本專案並未真實對任何後端伺服器取得資料，因此改用虛假資料作為資料來源。

在此建立一個 ```mock-heroes.ts``` 檔案於 ```./src/``` 目錄下，並匯出適當的資料矩陣。

## 建立服務

本專案參考 Angular 的服務範本設計：

+ ```hero.ts```：宣告 Hero 型態
+ ```hero.service.ts```：宣告 Hero 服務物件

透過 Hero 服務，在 ```getHeroes``` 函數執行時取得前述的 mock 資料，此部分是模擬對伺服器 API 的非同步操作。

## 載入服務與呈現

在 React 15 前的版本，其元件 ( Compoent ) 採用物件導向為設計核心 ( React.Component)，直到 16 後逐漸轉移到函數元件 ( Function component )，並導入勾 ( Hooks ) 的概念。

從軟體架構來看，此設計改動，讓原本元件的生命週期 ( Lifecycle ) 的大量固定函數，諸如 componentDidMount、componentWillUnmount 等，簡化到三個步驟前處理、繪製、後處理，若在精簡則達到遊戲引擎常用的兩步驟，即數據更新、圖像繪製。

本專案使用 react 18 版本，參考此版本的設計，秉棄物件元件，改用函數元件，並於繪製後執行 effect 來讀取服務內容。

+ [useEffect Hook](https://zh-hans.react.dev/reference/react/useEffect)
+ [頁面載入時就去請求資料 - useEffect 的基本使用](https://ithelp.ithome.com.tw/articles/10224270)

依據函數元件的設計概念，原則上非同步的資料提取一律在 effect 執行，其流程如下：

+ 前處理：宣告變數與勾
+ 繪製：執行 return 的 JSX 內容
+ 後處理：執行 useEffect 的函數內容
    - 若有數據變更，經由 useState 宣告的存取變數重新執行元件

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
