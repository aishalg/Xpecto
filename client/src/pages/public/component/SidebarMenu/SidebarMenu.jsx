import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./SidebarMenu.module.css";

function SidebarMenu() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [prevColor, setPrevColor] = useState("#faea09");

  useEffect(() => {
    if (sidebarOpen) {
      setPrevColor(
        document.body.style.getPropertyValue("--current-page-color")
      );
      document.body.style.setProperty("--current-page-color", "#ccf1e0");
      document.body.style.overflow = "hidden";
    } else {
      // if (prevColor) document.body.style.setProperty("--current-page-color", prevColor);
      document.body.style.overflow = "unset";
    }
  }, [sidebarOpen]);

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
            strokeWidth={10}
          />
          <line
            x1="10"
            y1="50"
            x2="90"
            y2="50"
            stroke="black"
            strokeWidth={10}
          />
          <line
            x1="10"
            y1="76"
            x2="90"
            y2="76"
            stroke="black"
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
            <HashLink smooth to="/#" onClick={() => setSidebarOpen(false)}>
              HOME
            </HashLink>
          </button>
          <button
            style={{ "--animation-order": 2 }}
            className={styles.sidebarBtn}
          >
            <HashLink smooth to="/#about" onClick={() => setSidebarOpen(false)}>
              ABOUT US
            </HashLink>
          </button>
          <button
            style={{ "--animation-order": 3 }}
            className={styles.sidebarBtn}
          >
            <Link to="/timeline">TIMELINE</Link>
          </button>
          <button
            style={{ "--animation-order": 4 }}
            className={styles.sidebarBtn}
          >
            <Link to="/sponsors">SPONSORS</Link>
          </button>
          <button
            style={{ "--animation-order": 5 }}
            className={styles.sidebarBtn}
          >
            <Link to="/events">EVENTS</Link>
          </button>
          <button
            style={{ "--animation-order": 6 }}
            className={styles.sidebarBtn}
          >
            <Link to="/workshops">WORKSHOPS</Link>
          </button>
          <button
            style={{ "--animation-order": 7 }}
            className={styles.sidebarBtn}
          >
            <Link to="/faq">FAQ</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default SidebarMenu;
