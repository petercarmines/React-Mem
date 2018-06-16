import React from "react";

const Image = props =>
  <div className="card">
    <div className="img-container">
      <img id="image" alt={props.name} src={props.image} data-id={props.id} onClick={() => props.increment(props.id)} />

    </div>
  </div>


export default Image;

