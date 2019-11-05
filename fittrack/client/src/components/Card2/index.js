import React from "react";

function Card2(props) {
  return (
  <div className="card img-fluid"
  style={{
    objectfit: "cover",
    width: "18rem",
    height: "300px",
    backgroundImage: props.image2 ? `url(${props.image2})` : "none"
  }}>
    <div className="card-body">
   <p>hello</p>
   </div>
  </div>
  );
}

export default Card2;