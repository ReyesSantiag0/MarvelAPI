import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RouterMarvel } from "./RouterMarvel.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterMarvel />
    </BrowserRouter>
  </React.StrictMode>
);
