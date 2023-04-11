import { Link, useNavigate, Navigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";

const LoginPage = ({ user, setUser, auth, setAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallbackResponse = async (response) => {
      const userObject = jwt_decode(response.credential);
      setUser(userObject);
      document.getElementById("signInDiv").hidden = true;
      navigate("/");

      const accessToken = response.credential;
      localStorage.setItem("accessToken", accessToken); // Store the access token in local storage
      setAuth({ isAuthenticated: true }); // Update authentication status to true
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

  // Check for access token in local storage and update authentication status accordingly
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setAuth({ isAuthenticated: true });
    } else {
      setAuth({ isAuthenticated: false });
    }
  }, [setAuth]);



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
