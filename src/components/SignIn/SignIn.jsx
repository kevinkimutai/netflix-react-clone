import { React, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import app from "../../lib/firebase";

import { userActions } from "../../store/user";

import "./SignIn.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [toggleSignUp, setToggleSignUp] = useState(false);

  const auth = getAuth(app);

  const signUpHandler = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        // Signed in
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  const signInHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        //LOGGED IN
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  return (
    <div className="signin">
      <h1>Sign In</h1>
      <form
        className="signin__form"
        onSubmit={!toggleSignUp ? signInHandler : signUpHandler}
      >
        <input placeholder="Email address" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        {!toggleSignUp && <button>Sign In</button>}
        {toggleSignUp && <button>Sign Up</button>}
        <div className="signin__options">
          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <p>Need help?</p>
        </div>
        <p className="signin__footer">
          <span>New to Netflix?</span>{" "}
          <span
            onClick={() => {
              setToggleSignUp(true);
            }}
          >
            Sign up now.
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
