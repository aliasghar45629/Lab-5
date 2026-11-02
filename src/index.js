import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
  "h2",
  null,
  "Hello without JSX!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);