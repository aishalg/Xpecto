import React, { useEffect, useRef } from "react";
import SidebarMenu from "../../pages/public/component/SidebarMenu/SidebarMenu";
import { ReactComponent as NavbarSvgTop } from "../../svg/navbar-top.svg";
import { ReactComponent as NavbarSvgMiddle } from "../../svg/navbar-middle.svg";
import { ReactComponent as NavbarSvgBottom } from "../../svg/navbar-bottom.svg";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const scrollContRef = useRef(null);
  const scrollBtnRef = useRef(null);

  useEffect(() => {
    const scrollbar = scrollBtnRef.current;
    const container = scrollContRef.current;

    const scrollFunc = () => {
      const height = document.body.scrollHeight;
      if(height - window.innerHeight < 0) {
        scrollbar.style.display = "none";
        return;
      };
      scrollbar.style.display = "block";
      scrollbar.style.height = `${
        (window.innerHeight / height) * container.clientHeight
      }px`;
      scrollbar.style.marginTop = `${
        (window.scrollY / (height - window.innerHeight)) *
        (container.clientHeight - scrollbar.clientHeight)
      }px`;
    };
    scrollFunc();

    window.addEventListener("scroll", scrollFunc);
    window.addEventListener("resize", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
      window.removeEventListener("resize", scrollFunc);
    };
  }, [scrollContRef, scrollBtnRef]);

  return (
    <div className={styles["navbar-container"]}>
      <div className={`${styles["navbar-top"]} ${styles["navbar"]}`}>
        <NavbarSvgTop />
        <div className={styles["hamburger-menu"]}>
          <SidebarMenu />
        </div>
      </div>
      <div className={`${styles["navbar-middle"]} ${styles["navbar"]}`}>
        <NavbarSvgMiddle />
        <div
          ref={scrollContRef}
          className={styles["scrollbar-container"]}
          id="scrollbar-container"
        >
          <img
            ref={scrollBtnRef}
            src={`${process.env.PUBLIC_URL}/home/scrollbtn.svg`}
            className={styles["scrollbar"]}
            id="scrollbar"
          />
        </div>
      </div>
      <div className={`${styles["navbar-bottom"]} ${styles["navbar"]}`}>
        <NavbarSvgBottom />
        <div className={styles["navbar-blackboxes"]}>
          <div className={styles["navbar-blackbox"]} />
          <div className={styles["navbar-blackbox"]} />
          <div className={styles["navbar-blackbox"]} />
          <div className={styles["navbar-blackbox"]} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
