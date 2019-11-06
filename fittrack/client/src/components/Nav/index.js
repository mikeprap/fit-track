import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Login from "../LoginForm";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <h1>Fit-Track</h1>
            {/* <img src="https://bulma.io/images/bulma-logo.png" width={112} height={28} /> */}
          </a>
        </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" id="signUp" href="/register">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" id="logIn" href="/protected">
                  Log in
                </a>
                <a className="button is-danger" id="logOut" href="/public">
                  Log Out
                </a>
              </div>
            </div>
          </div>
      </nav>
    );
  }
}

export default Nav;
