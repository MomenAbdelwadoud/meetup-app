import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

export default function NewMeetupPage({ db }) {
  const navigate = useNavigate();
  const addMeetup = async (meetupData) => {
    const docRef = await addDoc(collection(db, "meetups"), meetupData);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <NewMeetupForm addMeetup={addMeetup} />
    </div>
  );
}
