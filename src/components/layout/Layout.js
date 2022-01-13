import React from "react";
import Nav from "./Nav";
import styles from "./Layout.module.css";

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}
