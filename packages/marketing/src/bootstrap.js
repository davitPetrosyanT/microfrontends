import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

export function mount(el) {
  ReactDOM.render(<App />, el);
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_dev-root-marketing");
  if (el) {
    mount(el);
  }
}
