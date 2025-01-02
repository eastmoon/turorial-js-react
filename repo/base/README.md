# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Hot-reload in Docker

在 Docker 容器中使用開發伺服器有兩個主要問題：

+ 掛載專案目錄與檔案異動監測異常
    - 主要原因是容器的掛載目錄無發讓 linux 的 inotify 正常運作
+ 開發伺服器的連結埠與轉導埠不相同
    - 以 Vite 開發伺服器埠為 5173 來說，對外若設定 8080 則會導致 websocket 異常

基於上述問題，修正方式是增加如下內容於 vite.config.js 檔案

```
export default defineConfig({
  server: {
    port: 80,
    host: true,
    watch: {
      usePolling: true
    }
  },
})
```

其設定說明如下：

+ port 設定為 80，此數值應於外部轉導埠相同
+ host 設定為 true，意思是指開發伺服器的網址會改為容器本身的網址
+ watch 設定使用 Polling，意思是指監控改用輪巡方式
