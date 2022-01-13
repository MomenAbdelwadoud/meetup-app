import React from "react";
import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => {
        return (
          <li>
            <MeetupItem
              id={meetup.id}
              key={meetup.id}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
              image={meetup.image}
            />
          </li>
        );
      })}
    </ul>
  );
}
