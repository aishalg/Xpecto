import { style } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Profile.module.css";
import Sidebar from "../SidebarMenu/SidebarMenu";

import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const user = useSelector((state) => state.userinfo);
const[userdetails,setuserdetails]=useState({data:{}});
const navigate=useNavigate()
const [imageurl,setimageurl]=useState();
const getprofiledata=async()=>{
  try{   
         const url = `${process.env.REACT_APP_BACKENDURL}/api/user/profile`;
         const  data  = await axios.post(url,{
           user:user.email,
         });
         setuserdetails((userdetails)=>({
          ...userdetails,
          data:data.data.data
         }))
         console.log("vkkrb0",data.data.data)
         setimageurl(data.data.data.image);
    }catch{
         console.log("data saved sifnufreb");
   }
}
useEffect(()=>{
  getprofiledata();
},[])
    return (
      <>
            {/* <Sidebar/> */}
      <div className={styles["pback"]}>
      <div className={styles["containers"]}>
      <div className={styles["card-container"]}>
      <img className={styles["round"]} src={imageurl} alt={userdetails.data.displayName} />
      <h3>Name: {userdetails.data.displayName}</h3>
      <h6>Email ; {userdetails.data.email}</h6>
       <h6>Phone number: {userdetails.data.phoneNumber}</h6>      
    <Button onClick={()=>{
       navigate("/")
    }}>Home</Button>
    </div>
    </div>
    
    </div>
    </>
    )
};

export default Profile;