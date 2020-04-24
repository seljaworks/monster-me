import React from "react";

import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsterList.map((monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default CardList;
