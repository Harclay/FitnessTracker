import React from "react";
import { Route, Routes } from "react-router-dom";
import Activities  from "./Activities";


function App() {
  return (
    <div>
      <h1>Fitness Tracker</h1>
      <Routes>
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;
