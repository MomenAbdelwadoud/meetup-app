import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import FavContext from "../../store/FavContext";

export default function Nav() {
  const context = useContext(FavContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>My Meetups</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
            <span className={styles.badge}>{context.favoriteCount}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
