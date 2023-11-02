import React from "react";

const Card = ({icon,quantity,text}) => {
  return (
    <div className="card">
      <div className="card-header-icon">
        <span class="material-symbols-outlined">{icon}</span>
      </div>
      <div className="quantity">{quantity}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Card;
