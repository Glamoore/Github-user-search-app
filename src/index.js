import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider } from "./Context/ThemeContext";
import "./index.css";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
