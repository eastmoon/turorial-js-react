# React 專案建立

+ [Create React App](https://create-react-app.dev/docs/getting-started)
+ [Vite](https://vite.dev/guide/)

React 專案建立工具是用於生成 React 專案的工具；本專案範例後續採用 Vite 建立專案。

## create-react-app

[create-react-app](https://github.com/facebook/create-react-app) 是 facebook 的專案項目，建立專案可以透過 npm 或 yarm 執行

```
npm create react-app my-app
```

cra 其生成的專案結構如下：

```
workspace
    └ public
    └ src
```

cra 也可以指定樣板生成相應專案，例如下列建立 typescript 的 my-ts-app 專案

```
create-react-app my-ts-app --template typescript
```

2024.12 異常錯誤 [create-react-app installs react@19.0.0 causing peer dependency](https://github.com/facebook/create-react-app/issues/13717#issuecomment-2537222504)，此問題是 react 19 與相依專案產生問題導致；建議緊急修復方式如下參考：

```
npm create react-app my-app
cd my-app
rm package-lock.json
rm -rf node_modules
sed -i "s/19.0.0/18.0.0/g" package.json
npm install
```

此外，由於 cra 建立專案同時會自動安裝相依內容，在使用本專案的 ```react dev --repo=[repository-name]``` 指令啟動開發環境時會出現重複安裝。

## Vite

Vite 是 vue 的專案建立工具，但其專案本身為快速建立網頁專案用，使用 vite 建立的專案僅會建至必要檔案。

```
# 標準 React 專案 base
npm create vite@latest base -- --template react
# React + Typesctipt 專案 base-ts
npm create vite@latest base-ts -- --template react-ts
```

Vite 與 CRA 建立的專案最大差異在 public 中的 index.html 外移到專案根目錄，其設計理由可參考[index.html and Project Root](https://vitejs.dev/guide/#index-html-and-project-root)
