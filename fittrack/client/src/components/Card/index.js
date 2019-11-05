import React from "react";

function Card(props) {
  return (
  <div className="card img-fluid"
  style={{
    objectfit: "cover",
    width: "14rem",
    height: "300px",
    backgroundImage: props.image ? `url(${props.image})` : "none"
  }}>
    <div className="card-body">
   <p>hello</p>
   </div>
  </div>
  );
}

export default Card;
