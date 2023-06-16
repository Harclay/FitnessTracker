import { Register } from "./user/SignUp";

import { BrowserRouter, Link } from "react-router-dom";

let signedIn = true;

const LogOut = () => {
    return (
        <h1>temporary signed in = false</h1>
    )
}

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="title">Fitness Trackr</h1>

        <nav id="links">
          <Link to="/" id="link">
            Home
          </Link>
          <Link to="/routines" id="link">
            Routines
          </Link>
          {
            //  if (signedIn === true) {(
            //     <Link to="/myroutines" id="link">
            //         My Routines
            //     </Link>
            //     )
            // }
          }
          <Link to="/actvities" id="actvities">
            Activities
          </Link>
          {!signedIn ? (
            <LogOut />
          ) : (
            <>
              <Link to="/signup" id="link">
                Sign Up
              </Link>

              <Link to="/login" id="link">
                Log In
              </Link>
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
