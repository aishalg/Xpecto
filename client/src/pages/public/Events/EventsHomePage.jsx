import React, { useEffect, useRef } from "react";
import SidebarMenu from "../component/SidebarMenu/SidebarMenu";
import Sidebar from "../../../components/Sidebar/Sidebar";
import styles from "./EventsHomePage.module.css";
import { oldeventdetails } from "./oldevents";

import EventCardNew from "./EventCardNew";
import { ReactComponent as FixedLogo } from "../../../svg/xpecto-logo.svg";
const EventsHomePage = () => {
  const eventsRef = useRef(null);

  useEffect(() => {
    const current = eventsRef.current;
    document.body.style.setProperty(
      "--current-page-color",
      current.getAttribute("data-color")
    );
  });

  return (
    <>
      <Sidebar />
      <div
        data-color="#F8C456"
        ref={eventsRef}
        className={styles["events-page-container"]}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/home/background.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //   backgroundPosition: "center",
          backgroundAttachment: "fixed",
          //   height: "100vh",
        }}
      >
        <div className={styles["header"]}>
          <h1 className={styles["events-page-heading"]}>EVENTS</h1>
          <div
            className={`${styles["fixed-logo"]} ${styles["fixed-logo-visible"]}`}
          >
            <FixedLogo />
          </div>
        </div>
        <main className={styles["main"]}>
          {oldeventdetails.map((element) => {
            return <EventCardNew data={element} />;
          })}
        </main>
      </div>
    </>
  );
};

export default EventsHomePage;
