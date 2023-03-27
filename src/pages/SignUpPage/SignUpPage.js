import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from 'jwt-decode'

const SignUpPage = ({ URL, signup, isSignedUp, setIsSignedUp }) => {

  const [user,setUser] = useState(false)
  const navigate = useNavigate();
  const formRef = useRef();

  const form = formRef.current;

  // const handleSignup = (e) => {
  //   e.preventDefault();

  //   const username = form.username.value;
  //   const name = form.name.value;
  //   const password = form.password.value;

  //   if (!name || !username || !password) {
  //     toast("Please fill in all fields");
  //     return;
  //   }

  //   axios
  //     .post(`${URL}${signup}`, {
  //       name: name,
  //       username: username,
  //       password: password,
  //     })
  //     .then(() => {
  //       setIsSignedUp(true);

  //       if (isSignedUp) {
  //         alert("Sign up successful");
  //         navigate("/login");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   form.reset();

  // };
  useEffect(() => {
    const handleCallbackResponse = (response) => {
      // console.log("Encoded JWT ID token:" + response.credential);
      const userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);
    };
    /* global google */
    google.accounts.id.initialize({
      client_id:
      "1030792444601-2k1tp8pa2sk2ll65b90nmbhtrapspvab.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, [setUser]);


  return (
    <section className="login">
      <h2 className="login__title">
        "No one is a stranger in this world, just a soul in search of a home." -
        Unknown
      </h2>
      {/* onSubmit={handleSignup} */}
      {/* <form className="login__form"  ref={formRef}>
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
      </form> */}
      <div id="signInDiv"></div>
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
