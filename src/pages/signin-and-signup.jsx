import React from "react";
import SignIn from "../components/common/signin/singin";
import SignUp from "../components/common/sign-up/sign-up";
import "../styles/sign-in-and-sign-up.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
