import React, { useEffect } from 'react';
import SidebarMenu from '../../pages/public/component/SidebarMenu/SidebarMenu';
import {ReactComponent as NavbarSvg} from "../../svg/navbar.svg"
import styles from "./Sidebar.module.css";

const Sidebar = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src=`${process.env.PUBLIC_URL}js/scrollbar-handler.js`;
        script.async=true;
        document.body.appendChild(script);
    }, []);



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

            {/* <div className={styles['scrollbar-container']} id='scrollbar-container'>
                <div  className={styles['scrollbar']} id='scrollbar' />
            </div> */}
        </div>
    )
}

export default Sidebar;