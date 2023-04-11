import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";

const LoginPage = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallbackResponse = async (response) => {
      // console.log("Encoded JWT ID token:" + response.credential);
      const userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);
      document.getElementById("signInDiv").hidden = true;
      navigate("/");

      const accessToken = response.credential;
      try {
        const response = await fetch("http://localhost:8000/login", {
          method: "GET",
          headers: { 'Authorization': `Bearer ${accessToken}` },
        });

      } catch (error) {
        console.log(error);
      }
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
      <div id="signInDiv" className="login__google"></div>
      {user && (
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      )}

      <p>
        Don't have a google account? Sign Up{" "}
        <Link
          to="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp"
          target="_blank"
          className="login__link"
        >
          HERE
        </Link>
      </p>
    </section>
  );
};

export default LoginPage;
