import React, { useState } from "react";
import { loginUser } from "../../ajax-requests/Api";
import { useNavigate } from "react-router-dom";
import { myData } from "../../ajax-requests/Api";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(ev) {
    ev.preventDefault();
    const user = { username, password };

    const results = await loginUser(user);

    console.log(results.token);

    if (!results.error) {
      setToken(results.token);
      console.log("hi");
      window.localStorage.setItem("token: ", results.token);
      navigate("/");

      const result = await myData(results.token);
      return result;
    } else if (results.error) {
      setError(results.error);
    }
  }

  return (
    <>
      <h1 className="pagetitle">LOG IN </h1>
      <div className="signup">
        <form onSubmit={handleSubmit} className="sign">
          <div>
            <p>Your Username:</p>
            <input
              type="text"
              placeholder="Enter Your Username"
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </div>

          <div>
            <p>Your Password:</p>
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>

          {error ? <p>{error}</p> : null}

          <button type="submit" className="crf">
            Complete
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
