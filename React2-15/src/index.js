import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import 是導入 export裡面的東西 //
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// const是數據容器 如果有一個值永遠不用重新賦予值 用const最好 其他需要一直重新賦予餘的可使用let //
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
