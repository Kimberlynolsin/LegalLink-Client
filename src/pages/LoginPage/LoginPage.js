import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const LoginPage = ({ login, URL }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post(`${URL}${login}`, {
      username: e.target.username.value,
      password: e.target.password.value,
    })
    .then(({data})=>{
      console.log(data.token)
      sessionStorage.setItem('token', data.token)
      setIsLoggedIn(true)
      setIsLoginError(false)
      setErrorMessage('')

    })
    .catch((err)=>{
      console.log(err)
      setIsLoginError(err)
    })
    navigate("/");
  };

  return (
    <section className="login">
      <h2 className="login__title">
        "No one is a stranger in this world, just a soul in search of a home." -
        Unknown
      </h2>

      <form className="login__form"  onSubmit={handleLogin}>
        <label>
          username:
          <input type="text" name="username"></input>
        </label>
        <label>
          password:
          <input type="text" name="password"></input>
        </label>

        <div className="login__btn-container">
          <button
            className="login__btn-container__button"
           
          >
            LOGIN
          </button>
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
