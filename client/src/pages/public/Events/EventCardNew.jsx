import React from "react";
import styles from "./EventCardNew.module.css";
const EventCardNew = (props) => {
  return (
    <div className={styles["card-outer-container"]}>
      <div className={styles["card-inner-container"]}>
        <div className={styles["main-container"]}>
          <h2 className={styles["event-name"]}>
            {props.data.name.toUpperCase()}
          </h2>

          <h3 className={styles["event-tagline"]}>
            Robots. Fighting. Pure Ecstasy!
          </h3>
          <a className={styles["more-button"]}>MORE {">>>"}</a>
        </div>
      </div>
    </div>
  );
};

export default EventCardNew;
