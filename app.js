import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel Transpiles JSX to React.createElement => ReactElement(which is a JS object) => Renders into a HTML element.
const jsxHeading = <h1 className="head">Namste React using JSX</h1>;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);