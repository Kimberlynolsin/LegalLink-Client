import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = ({ login, URL, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const formRef = useRef();
  console.log(isLoggedIn);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const username = form.username.value;
    const password = form.password.value;

    if (!username || !password) {
      toast("Please fill in all fields");
      return;
    }

    axios
      .post(`${URL}${login}`, {
        username,
        password,
      })
      .then(({ data }) => {
        console.log(data);
        setIsLoggedIn(data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <section className="login">
      <h2 className="login__title">
        "No one is a stranger in this world, just a soul in search of a home." -
        Unknown
      </h2>

      <form className="login__form" onSubmit={handleLogin} ref={formRef}>
        <label>
          username:
          <input type="text" name="username"></input>
        </label>
        <label>
          password:
          <input type="password" name="password"></input>
        </label>

        <div className="login__btn-container">
          <button className="login__btn-container__button">LOGIN</button>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
