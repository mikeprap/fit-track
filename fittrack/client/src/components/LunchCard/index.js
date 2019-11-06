import React from "react";
import "./style.css";

function LunchCard(props) {
    return (
        <div className="card">
            <img src= {props.image1}></img>
          <div className="card-body">
          <h5 className="card-title">{props.label1}</h5>
          <p className="card-text">{props.ingredients1}</p>
         </div>
         
        </div>
        );
}

export default LunchCard;