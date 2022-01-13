import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { collection, getDocs } from "@firebase/firestore";

export default function AllMeetupsPage({ db }) {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "meetups"));

    let meetups = [];
    querySnapshot.forEach((doc) => {
      meetups.push({ id: doc.id, ...doc.data() });
    });
    setMeetups(meetups);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>All Meetups</h1>
      {isLoading ? (
        <h3 style={{ textAlign: "center" }}>Loading...</h3>
      ) : (
        <MeetupList meetups={meetups} />
      )}
    </div>
  );
}
