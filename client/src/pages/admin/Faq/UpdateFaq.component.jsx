import React from 'react'
import styles from "./Faq.module.css";
import { Button,TextField,Grid,TextareaAutosize} from "@mui/material";
import { useState } from "react";
import axios from 'axios';
import Stack from '@mui/material/Stack';
export default function UpdateFaq(props) {
    const data=props.faqdetail
    const [newdata,setnewdata]=useState(data)
    console.log("updatefaq",data)
   
  return (
    <>

<Grid  item display="flex" justifyContent="center" alignItems="center" xs={12} sm={12} md={12}>  <Button variant="outlined" onClick={(e)=>handleSubmit(e,props.eventdetail._id)}styles={{marginTop:"20px",marginBottom:"30px",width:"300px",display:"flex",flexDirection:"column",justifyContent:"center"}} >Update Faq</Button>
</Grid>


    </>
  )
}
