import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
        <img src= {props.image}></img>
      <div className="card-body">
      <h5 className="card-title">{props.label}</h5>
      <p className="card-text">{props.ingredients}</p>
     </div>
     
    </div>
    );
}

export default Card;
