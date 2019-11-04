import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/4.4 crown.svg.svg";
import "./navbar.scss";
import { auth } from "../../../firebase/firebase.utils";

const NavBar = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option">CONTACT</Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
