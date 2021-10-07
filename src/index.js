import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ResetCss } from "./global/style/ResetCss";
import { Providers } from "./Providers";

ReactDOM.render(
  <React.StrictMode>
    <ResetCss />
    <Providers>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
