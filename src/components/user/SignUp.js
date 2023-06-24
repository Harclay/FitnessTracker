import React, { useState } from "react";
import { fetchUser } from "../../ajax-requests/Api";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(ev) {
    ev.preventDefault();

    const user = { username, password };

    const results = await fetchUser(user);

    if (!results.error) {
      setToken(results.token);
      window.localStorage.setItem("token: ", results.token);
      navigate("/");
    } else if (results.error) {
      setError(results.error);
    }
  }

  return (
    <>
      <h1 className="pagetitle"> SIGN UP </h1>
      <div className="signup">
        <form onSubmit={handleSubmit} className="sign">
          <div>
            <p>Create Username</p>
            <input
              type="text"
              placeholder="at least 8 characters"
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </div>

          <div>
            <p>Create Password</p>
            <input
              type="password"
              placeholder="at least 8 characters"
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

export default SignUp;
