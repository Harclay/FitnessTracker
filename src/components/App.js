import React, { useEffect, useState } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login, SignUp } from "./user";
import { Activities } from "./activities";
import { fetchActivities, myData } from "../ajax-requests/Api";
import MyRoutines from "./MyRoutines";
import UserRoutines from "./UserRoutines";
import Routines from "./Routines";

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [token, setToken] = useState("");
  const [activities, setActivities] = useState([]);
  const [username, setUsername] = useState("");

  const tokenCheck = () => {
    if (window.localStorage.getItem("token: ")) {
      setToken(window.localStorage.getItem("token: "), setSignedIn(true));
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [token]);

  const getActivities = async () => {
    try {
      const result = await fetchActivities(token);
      setActivities(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  const getUsername = async () => {
    try {
      const result = await myData(token);
      console.log(result, "result from getUsername");
      setUsername(result.username);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (signedIn) {
      getUsername();
    }
  }, [signedIn]);

  useEffect(() => {
    console.log(username, "username from state");
  }, [username]);
  

  return (
    <>
      <BrowserRouter>
        <Header signedIn={signedIn} setToken={setToken} token={token} />

        <Routes>
          <Route exact path="/" />
          <Route exact path="/routines" element={<Routines />} />
          <Route
            exact
            path="/myroutines"
            element={<MyRoutines token={token} signedIn={signedIn} username={username} activities={activities} />}
          />
          <Route
            path="/users/:username/routines"
            element={<UserRoutines token={token} username={username} />}
          />
          <Route
            exact
            path="/activities"
            element={
              <Activities
                token={token}
                activities={activities}
                signedIn={signedIn}
                getActivities={getActivities}
              />
            }
          />
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
