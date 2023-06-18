import React, { useEffect, useState } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login, SignUp } from "./user";

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [token, setToken] = useState("");

  const tokenCheck = () => {
    if (window.localStorage.getItem("token: ")) {
      setToken(window.localStorage.getItem("token: "), setSignedIn(true));
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <Header signedIn={signedIn} setToken={setToken} token={token} />

        <Routes>
          <Route exact path="/" />
          <Route exact path="/routines" />
          <Route exact path="/myroutines" />
          <Route exact path="/activities" />
          <Route
            exact
            path="/signup"
            element={<SignUp token={token} setToken={setToken} />}
          />
          <Route
            exact
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
