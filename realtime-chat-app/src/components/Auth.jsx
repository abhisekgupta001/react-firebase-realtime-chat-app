import React from "react";
import { auth, googleProvider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Auth = (props) => {
  const { setIsAuthenticated } = props;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuthenticated(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <p>Sign in with Google to continue</p>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Auth;
