import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NavProvider } from "./Context.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <NavProvider>
      <App />
    </NavProvider>
  </DndProvider>,
  document.getElementById("root")
);
