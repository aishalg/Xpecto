import React, { useEffect, useRef } from 'react';
import SidebarMenu from '../../pages/public/component/SidebarMenu/SidebarMenu';
import {ReactComponent as NavbarSvg} from "../../svg/navbar.svg"
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    const scrollContRef = useRef(null);
    const scrollBtnRef = useRef(null);

    useEffect(() => {
        const scrollbar = scrollBtnRef.current;
        const container = scrollContRef.current;

        const scrollFunc = () => {
            const height = document.body.scrollHeight - window.innerHeight;
            scrollbar.style.height = `${window.innerHeight / height * container.clientHeight}px`;
            scrollbar.style.marginTop = `${window.scrollY/height*(container.clientHeight-scrollbar.clientHeight)}px`
        }
        scrollFunc();
        
        window.addEventListener("scroll", scrollFunc);
        window.addEventListener("resize", scrollFunc);

        return () => {
            window.removeEventListener("scroll", scrollFunc);
            window.removeEventListener("resize", scrollFunc);
        }
    }, [scrollContRef, scrollBtnRef]);



    return (
        <div className={styles['navbar-container']}>
            <NavbarSvg className={styles['navbar']}/>
            <div className={styles['hamburger-menu']}>
                <SidebarMenu />
            </div>
            <div className={styles['navbar-blackboxes']}>
                <div className={styles['navbar-blackbox']} />
                <div className={styles['navbar-blackbox']} />
                <div className={styles['navbar-blackbox']} />
                <div className={styles['navbar-blackbox']} />
            </div>

            <div ref={scrollContRef} className={styles['scrollbar-container']} id='scrollbar-container'>
                <img ref={scrollBtnRef} src={`${process.env.PUBLIC_URL}home/scrollbtn.svg`} className={styles['scrollbar']} id='scrollbar' />
            </div>
        </div>
    )
}

export default Sidebar;