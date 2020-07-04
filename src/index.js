import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";

document.getElementById("root").attachShadow({ mode: "open" });
const target = document.getElementById("root").shadowRoot;

const myCache = createCache({
  container: target,
});

ReactDOM.render(
  <React.StrictMode>
    <CacheProvider value={myCache}>
      <App />
    </CacheProvider>
  </React.StrictMode>,
  target
);
