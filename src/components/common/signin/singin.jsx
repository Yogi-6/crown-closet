import React, { Component } from "react";
import FormInput from "../form-input/form-input";

import "./signin.scss";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState = {
      email: "",
      password: ""
    };
  }

  handleChange(evt) {
    console.log(evt.target);
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            type="text"
            name="email"
            id="email"
            lable="Email"
            value={this.state.email}
            handleChange={this.handleChange}
          />

          <FormInput
            required
            type="password"
            name="password"
            id="password"
            lable="Password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Submit</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
