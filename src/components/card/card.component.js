import React from "react";
import "./card.styles.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="monsters"
      />
      {props.monster.name}
      <p>{props.monster.email}</p>
    </div>
  );
};
