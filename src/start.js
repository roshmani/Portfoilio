import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
// import injectGlobal helper
import { injectGlobal } from "styled-components";
// Global style
injectGlobal`
  html,
  body,
  main,
  .wrapper {
    min-height: 100vh;
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body {
    padding: 0;
    margin: 0;
    font: 1rem / 1.414 arial, sans-serif;
  }
`;

let elem = <App />;

ReactDOM.render(elem, document.querySelector("main"));
