import React from "react";
import "./style.css";

function Jumbotron() {
  return(
  <section className="hero is-medium is-dark is-bold">
        <div className="hero-body">
          <div className="hero-container">
            <h1 className="title">
              Welcome to Fit-Track
            </h1>
            <h2 className="subtitle">
              Go ahead and log in to get started!
            </h2>
          </div>
        </div>
      </section>
  )
}

export default Jumbotron;
