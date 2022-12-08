import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className={styles["page"]}>
            <Link to="/admin/dashboard">Go to Admin Dashboard</Link>
        </div>
    );
};

export default Home;
