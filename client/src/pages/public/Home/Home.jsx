import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useState,useEffect } from "react";
import axios from "axios";
import Razorpay from "../component/payment/Razorpay";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar/Sidebar";
const Home = () => {
  const [user, setUser] = useState(null);
    const navigate=useNavigate();
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKENDURL}/auth/login`;
      const { data } = await axios.get(url, { withCredentials: true });
      // console.log("data",data)
            if(data.isnewuser){
        navigate("/signup");
      }

			setUser(data.message,data.error);
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
  };
	console.log("usedetail " ,user)
  return (
    <>
      <div
        style={{
          position: "fixed",
          height: "70px",
          width: "70px",
          display: "flex",
		  zIndex: "2",
        }}
      >
        <Sidebar />
      </div>
      <div className={styles["page"]}>
        <Link to="/admin/dashboard">Go to Admin Dashboard</Link>
      </div>
        <Button variant="outlined" onClick={googleAuth} sx={{ m: 5 }}>Sign in google</Button>
        <Button variant="outlined" onClick={googleAuth} sx={{ m: 5 }}>Login with google</Button>
        <Button variant="outlined" onClick={logout} sx={{ m: 5 }}>Logout</Button>
      <div>
			<Razorpay/>
      </div>
    </>
  );
};

export default Home;
