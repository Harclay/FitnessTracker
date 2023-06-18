import { Link } from "react-router-dom";

const Header = ({ signedIn, setToken, token }) => {
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

          {signedIn ? (
            <Link to="/myroutines" id="link">
              My Routines
            </Link>
          ) : null}

          <Link to="/actvities" id="actvities">
            Activities
          </Link>
          {signedIn ? (
            <Link
              to="/"
              id="link"
              onClick={() => {
                setToken(null);
                window.localStorage.removeItem("token: ", token);
                console.log(token);
                window.location.reload();
              }}
            >
              Log Out
            </Link>
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
