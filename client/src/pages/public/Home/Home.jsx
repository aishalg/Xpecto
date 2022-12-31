import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useState,useEffect } from "react";
import axios from "axios";
const Home = () => {
    const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_BACKENDURL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

    // const usera = userDetails.user;
	const logout = () => {
		window.open(`${process.env.REACT_APP_BACKENDURL}/auth/logout`, "_self");
	};
    const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_BACKENDURL}/auth/google/callback`,
			"_self"
		);
        console.log("usedetail " ,user)
	};
    return (
        <>
        <div className={styles["page"]}>
            <Link to="/admin/dashboard">Go to Admin Dashboard</Link>
        </div>
        <Button variant="outlined" onClick={googleAuth} sx={{ m: 5 }}>Sign in google</Button>
        <Button variant="outlined" onClick={googleAuth} sx={{ m: 5 }}>Login with google</Button>
        <Button variant="outlined" onClick={logout} sx={{ m: 5 }}>Logout</Button>
        </>
    );
};

export default Home;
