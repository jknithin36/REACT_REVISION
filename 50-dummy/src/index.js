import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Counter from "./counter";
import Counter1 from "./counter1";
import Todo from "./todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Counter />
    <Counter1 />
    <Todo />
  </React.StrictMode>
);
