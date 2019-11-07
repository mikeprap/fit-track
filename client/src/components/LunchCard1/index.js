import React from "react";


function LunchCard1(props) {
    return (
        <div className="card">
            <img src= {props.image2}></img>
          <div className="card-body">
          <h5 className="card-title">{props.label2}</h5>
          <p className="card-text">{props.ingredients2}</p>
         </div>
         
        </div>
        );
}

export default LunchCard1;