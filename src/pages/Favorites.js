import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useContext } from "react";
import FavContext from "../store/FavContext";

export default function FavoritesPage() {
  const context = useContext(FavContext);
  return (
    <div>
      {context.favoriteCount == 0 ? (
        <h4>No Favourites yet</h4>
      ) : (
        <MeetupList meetups={context.favoriteList}></MeetupList>
      )}
    </div>
  );
}
