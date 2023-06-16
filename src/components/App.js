import React from "react";

import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <h1>hi</h1>
      </BrowserRouter>
    </>
  );
}

export default App;
