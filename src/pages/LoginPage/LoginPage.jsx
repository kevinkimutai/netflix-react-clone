import { React, useState } from "react";

import "./LoginPage.css";

import SignIn from "../../components/SignIn/SignIn";

import logo from "../../assets/images/netflix-logo.png";

const LoginPage = () => {
  const [showSignIn, setshowSignIn] = useState(false);

  return (
    <div className="login section__padding">
      <div className="login__nav">
        <img src={logo} alt="logo" />;
        <button
          className="login__sign-up-btn"
          src={logo}
          alt="logo"
          onClick={() => {
            setshowSignIn(true);
          }}
        >
          sign in
        </button>
      </div>

      <div className="login__contents">
        {showSignIn && <SignIn />}
        {!showSignIn && (
          <>
            <h1>Unlimited Movies, TV shows and more</h1>
            <h2>Watch anywhere, cancel anytime</h2>
            <h3>
              Ready to watch?Enter your email to create or restart your
              membership
            </h3>
            <div className="login__contents_input">
              <input placeholder="Email address" />
              <button>get started</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

//https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
