import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  //check if user has signed up
  //if yes, redirect to login, if no tell user to sign up
  //if username and passed === the record we have then redirect to homepage
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <section className="login">
      <h2 className="login__title">
        "No one is a stranger in this world, just a soul in search of a home." -
        Unknown
      </h2>

      <form className="login__form">
        <label>
          username:
          <input type="text"></input>
        </label>
        <label>
          password:
          <input type="text"></input>
        </label>

        <div className="login__btn-container">
          <button className="login__btn-container__button" onClick={handleLogin}>LOGIN</button>
        </div>
      </form>
      <p>
        Don't have an account? Sign Up{" "}
        <Link to="/signup" className="login__link">
          HERE
        </Link>
      </p>
    </section>
  );
};

export default LoginPage;
