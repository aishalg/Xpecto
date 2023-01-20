import React, { useEffect } from 'react';
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
            <img className={styles['navbar']} src={`${process.env.PUBLIC_URL}home/navbar.svg`} alt='navbar' />
            <img className={styles['hamburger-menu']} src={`${process.env.PUBLIC_URL}home/menulines.svg`} alt='menu' />
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