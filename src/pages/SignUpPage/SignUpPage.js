import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = ({ URL, signup, isSignedUp, setIsSignedUp }) => {
  const navigate = useNavigate();
  const formRef = useRef();

  const form = formRef.current;

  const handleSignup = (e) => {
    e.preventDefault();

    const username = form.username.value;
    const name = form.name.value;
    const password = form.password.value;

    if (!username || !name || !password) {
      alert("Please fill in all fields");
      return;
    }


    axios
    .post(`${URL}${signup}`, {
      name: name,
      username: username,
      password: password,
    })
    
    .then(() => {
      setIsSignedUp(true);

      if (isSignedUp) {
        alert('Sign up successful')
        navigate("/login");
      }

      })
      .catch((err) => {
        console.log(err);
      });
      form.reset();

  
  };
  return (
    <section className="login">
      <h2 className="login__title">
        "No one is a stranger in this world, just a soul in search of a home." -
        Unknown
      </h2>

      <form className="login__form" onSubmit={handleSignup} ref={formRef}>
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
          <input type="password" name="password"></input>
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
