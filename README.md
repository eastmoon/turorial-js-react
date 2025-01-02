# JavaScript Library React

## 執行

本專案使用的命令介面僅適用 Windows 環境且運行於 Docker 環境。

+ 進入專案管理模式
```
react app
```

此模式啟用 React 開發環境並且引入 ```/repo``` 目錄至工作目錄

+ 進入專案開發模式
```
react dev --repo=<repo-name>
```

此模式啟用 React 開發環境並且引入 ```/repo/<repo-name>``` 目錄至工作目錄，以便 ```npm build``` 等操作產出的內容可以匯出至 ```/cache``` 目錄

## 範例

本專案執行的範例：

+ [React 建立與管理專案](./repo/readme.md)
+ React 專案特性
    - [基礎專案](./repo/base/README.md)，執行 ```react dev --repo=base```
    - 服務專案
    - 導覽專案
    - 編譯設定
    - 動態載入

以上所有範例的開發伺服器皆執行於 5173 埠。
