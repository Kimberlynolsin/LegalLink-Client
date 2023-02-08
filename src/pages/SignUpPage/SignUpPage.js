import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = ({ URL, signup }) => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let name = e.target.name.value;
    let password = e.target.password.value;

    if (!username || !name || !password) {
      alert("Please fill in all fields");
      return
    }

    axios
      .post(`${URL}${signup}`, {
        username: username,
        name: name,
        password: password,
      })

      .then(() => {
        setIsSignedUp(true);
        if (isSignedUp) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    username = "";
    name = "";
    password = "";
  };
  return (
    <section className="login">
      <h2 className="login__title">
        "No one is a stranger in this world, just a soul in search of a home." -
        Unknown
      </h2>

      <form className="login__form" onSubmit={handleSignup}>
        <label>
          name:
          <input type="text" name="name"></input>
        </label>
        <label>
          username:
          <input type="text" name="username"></input>
        </label>
        <label>
          password:
          <input type="text" name="password"></input>
        </label>

        <div className="login__btn-container">
          <button className="login__btn-container__button">SIGN UP</button>
        </div>
      </form>
      <p>
        Have an account? Login in
        <Link to="/login" className="login__link">
          HERE
        </Link>
      </p>
    </section>
  );
};

export default SignUpPage;
