import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const fetched_el = document.getElementById("dev-react");

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (fetched_el) {
  mount(fetched_el);
}

export { mount };
