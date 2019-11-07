import React from "react";


function RecipeCard(props) {
  return (
    <div className="column">
    <div className="card">
        <img src= {props.photo}></img>
      <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.recipeName}</p>
      <p className="card-text">{props.ingredients}</p>
      <p className="card-text">{props.instructions}</p>
     </div>
     </div>
    </div>
    );
}

export default RecipeCard;