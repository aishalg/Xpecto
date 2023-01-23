import React, { useEffect, useRef } from "react";
import SidebarMenu from "../../pages/public/component/SidebarMenu/SidebarMenu";
import Scrollbar from "./Scrollbar/Scrollbar";
import { ReactComponent as NavbarSvgTop } from "../../svg/navbar-top.svg";
import { ReactComponent as NavbarSvgMiddle } from "../../svg/navbar-middle.svg";
import { ReactComponent as NavbarSvgBottom } from "../../svg/navbar-bottom.svg";
import { useMediaQuery } from "@mui/material";
import styles from "./Sidebar.module.css";
// social icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Sidebar = () => {
  const scrollNotVisible = useMediaQuery("(max-width:450px)");
  return (
    <div className={styles["navbar-container"]}>
      <div className={`${styles["navbar-top"]} ${styles["navbar"]}`}>
        <NavbarSvgTop />
        <div className={styles["hamburger-menu"]}>
          <SidebarMenu />
        </div>
      </div>
      {!scrollNotVisible && (
        <>
          <div className={`${styles["navbar-middle"]} ${styles["navbar"]}`}>
            <NavbarSvgMiddle />
            <Scrollbar />
          </div>
        </>
      )}
      <div className={`${styles["navbar-bottom"]} ${styles["navbar"]}`}>
        <NavbarSvgBottom />
        <div className={styles["navbar-blackboxes"]}>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/xpecto-tech/"
            className={styles["navbar-icons"]}
          >
            <LinkedInIcon />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/xpecto.tech"
            className={styles["navbar-icons"]}
          >
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            href="https://www.twitter.com/XpectoTech"
            className={styles["navbar-icons"]}
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
