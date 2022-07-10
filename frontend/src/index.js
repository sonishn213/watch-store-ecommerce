import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";

import Routers from "./component/navigation/Routers";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </React.StrictMode>
);
