const Home = ({ signedIn, username }) => {
  return (
    <>
      <div className="home">
        {signedIn ? (
          <h1 className="title2">WELCOME BACK TO FITNESS TRACKR {username}</h1>
        ) : (
          <h1 className="title2">WELCOME TO FITNESS TRACKR</h1>
        )}

        <p className="sentence">
          {" "}
          FullStack Academy's #1 website to getting swole!
        </p>
        <p className="sentence">
          Check out our renowned Routines and get fit today!
        </p>
      </div>
    </>
  );
};

export default Home;
