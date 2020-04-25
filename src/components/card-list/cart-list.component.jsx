import React from "react";
import Card from "../card/card.component";

// import style from "./card-list.style.css";
import styles from "./card-list.module.css";
const CardList = (props) => {
  return (
    <div className={props.monsterList.length <= 0 ? "" : styles.cardList}>
      {props.monsterList.length <= 0 ? (
        <div className={styles.emptyList}>Can't find monster</div>
      ) : (
        props.monsterList.map((monster) => (
          <Card monster={monster} key={monster.id} />
        ))
      )}
    </div>
  );
};

export default CardList;
