import React from "react";

function Card1(props) {
  return (
  <div className="card img-fluid"
  style={{
    objectfit: "cover",
    width: "18rem",
    height: "300px",
    backgroundImage: props.image1 ? `url(${props.image1})` : "none"
  }}>
    <div className="card-body">
   <p>hello</p>
   </div>
  </div>
  );
}

export default Card1;