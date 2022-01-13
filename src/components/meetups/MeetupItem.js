import React from "react";
import Card from "../layout/Card";
import styles from "./MeetupItem.module.css";
import { useContext } from "react";
import FavContext from "../../store/FavContext";

export default function MeetupItem(props) {
  const context = useContext(FavContext);
  const isFav = context.isFav(props.id);
  function FavClick() {
    if (isFav) {
      context.removeFav(props.id);
    } else {
      context.addFav({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt="No Image!" />
        </div>
        <div className={styles.content}>
          <h2>{props.title}</h2>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={FavClick}>
            {isFav ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
