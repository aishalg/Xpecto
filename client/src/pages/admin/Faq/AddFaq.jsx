import React from "react";
import style from "./Faq.module.css";
import { Button,TextField,Grid,TextareaAutosize} from "@mui/material";
import { useState } from "react";
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Popup from 'reactjs-popup';

const AddFaq = () => {
    const data={
        question:"",
      answer:""
    } 
    
    return <>
    <div className={style["grid-container"]} style={{marginTop:"50px"}}>
    <div className={style["faqbutton"]}>
    
    </div> 
    <Popup trigger={<Button variant="outlined" style={{marginLeft:"20px"}} >Add Faq</Button>
} position="bottom center">
    
   
  </Popup>
  </div> 
        </>
};

export default AddFaq;

