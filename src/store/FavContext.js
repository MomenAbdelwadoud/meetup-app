import { createContext, useState } from "react";
import React from "react";

const FavContext = createContext({
  favoriteList: [],
  favoriteCount: 0,
  addFav: (meetup) => {},
  isFav: (meetupId) => {},
  removeFav: (meetupId) => {},
});

export function FavContextProvider(props) {
  const [favorites, setFavorites] = useState([]);
  function addFav(meetup) {
    setFavorites((prevState) => {
      return prevState.concat(meetup);
    });
  }
  function isFav(meetupId) {
    return favorites.some((meetup) => meetupId == meetup.id);
  }
  function removeFav(meetupId) {
    setFavorites((prev) => {
      return prev.filter((meetup) => {
        return meetup.id !== meetupId;
      });
    });
  }

  let context = {
    favoriteList: favorites,
    favoriteCount: favorites.length,
    addFav,
    isFav,
    removeFav,
  };
  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContext;
