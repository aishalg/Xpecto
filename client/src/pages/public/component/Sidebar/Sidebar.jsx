import React, { useState } from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        className={styles.sidebarToggle}
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <svg
          className={`${styles.sidebarIcon} ${
            sidebarOpen ? styles.sidebarIconChange : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <line
            x1="10"
            y1="24"
            x2="90"
            y2="24"
            stroke="black"
            strokeLinecap="round"
            strokeWidth={10}
          />
          <line
            x1="10"
            y1="50"
            x2="90"
            y2="50"
            stroke="black"
            strokeLinecap="round"
            strokeWidth={10}
          />
          <line
            x1="10"
            y1="76"
            x2="90"
            y2="76"
            stroke="black"
            strokeLinecap="round"
            strokeWidth={10}
          />
        </svg>
      </button>
      <div
        className={`${styles.sidebarBackdrop} ${
          sidebarOpen ? styles.sidebarBackdropOpen : ""
        }`}
      >
        <div
          className={`${styles.sidebarContainer} ${
            sidebarOpen ? styles.sidebarOpen : ""
          }`}
        >
          {/* --animation-order species order of animations */}
          <button
            style={{ "--animation-order": 1 }}
            className={styles.sidebarBtn}
          >
            HOME
          </button>
          <button
            style={{ "--animation-order": 2 }}
            className={styles.sidebarBtn}
          >
            ABOUT US
          </button>
          <button
            style={{ "--animation-order": 3 }}
            className={styles.sidebarBtn}
          >
            TIMELINE
          </button>
          <button
            style={{ "--animation-order": 4 }}
            className={styles.sidebarBtn}
          >
            SPONSORS
          </button>
          <button
            style={{ "--animation-order": 5 }}
            className={styles.sidebarBtn}
          >
            EVENTS
          </button>
          <button
            style={{ "--animation-order": 6 }}
            className={styles.sidebarBtn}
          >
            WORKSHOPS
          </button>
          <button
            style={{ "--animation-order": 7 }}
            className={styles.sidebarBtn}
          >
            FAQ
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
