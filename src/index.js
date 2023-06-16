import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
<BrowserRouter>
    <App />
</BrowserRouter>
);
