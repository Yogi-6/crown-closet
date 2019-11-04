import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import {
  auth,
  createUserProfileDocument
} from "../../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button";
import "./sign-up.scss";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password do not match!!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("user", user);

      await createUserProfileDocument(user, { displayName });

      this.state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
    } catch (error) {
      console.log("error", error.message);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password.</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            lable="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            lable="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            lable="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            lable="Confirm Password"
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
