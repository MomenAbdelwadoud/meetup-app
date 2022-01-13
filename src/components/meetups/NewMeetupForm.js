import React from "react";
import Card from "../layout/Card";
import styles from "./NewMeetupForm.module.css";
import { useRef } from "react";

export default function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const address = addressRef.current.value;
    const description = descriptionRef.current.value;
    const meetupData = { title, image, address, description };
    props.addMeetup(meetupData);
  };

  return (
    <section>
      <Card>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" ref={titleRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="image">Image url:</label>
            <input type="url" id="image" ref={imageRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" ref={addressRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              cols="20"
              rows="5"
              ref={descriptionRef}
            ></textarea>
          </div>
          <div className={styles.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    </section>
  );
}
