import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups.js";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";
import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";
import { FavContextProvider } from "./store/FavContext";

function App() {
  // Web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAAmfcsWIZyiSHekUonbHOrxyVMfj0C610",
    authDomain: "meetups-ef416.firebaseapp.com",
    projectId: "meetups-ef416",
    storageBucket: "meetups-ef416.appspot.com",
    messagingSenderId: "917774806554",
    appId: "1:917774806554:web:6500989824ed6bc1df2ba3",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return (
    <div className="App">
      <FavContextProvider>
        <Layout>
          <Routes>
            <Route path="/" exact element={<AllMeetupsPage db={db} />}></Route>
            <Route path="/favorites" element={<FavoritesPage />}></Route>
            <Route
              path="/new-meetup"
              element={<NewMeetupPage db={db} />}
            ></Route>
          </Routes>
        </Layout>
      </FavContextProvider>
    </div>
  );
}

export default App;
