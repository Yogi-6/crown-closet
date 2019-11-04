import React, { Component } from "react";
import SignInAndSignUp from "./pages/signin-and-signup";
import NavBar from "./components/common/nav/navbar";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop-page";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.state.currentUser);
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
