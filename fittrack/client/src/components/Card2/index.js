import React from "react";
import "./style.css";

function Card2(props) {
  return (
  <div className="card">
      <img src= {props.image2}></img>
    <div className="card-body">
    <h5 class="card-title">{props.label2}</h5>
    <p class="card-text">{props.ingredients2}</p>
   </div>
   
  </div>
  );
}

export default Card2;