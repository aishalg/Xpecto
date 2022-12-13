import React from 'react'
import { Grid,Typography,Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import style from "./Faq.module.css";
import Popup from 'reactjs-popup';
import UpdateFaq from './UpdateFaq.component';
import axios from 'axios';
export default function OneFaq(props) {
    const handledelete=async(e,id)=>{

        console.log(id,"Delete")
        try {
          const url=`${process.env.REACT_APP_BACKENDURL}/api/events/${id}`;
          const res=await axios.delete(url);
        } catch (error) {
          console.log("ref eroor")
        }        

    }
  return (
    <>
  
<Grid item xs={4}sm={4} md={4}display="flex" justifyContent="flex-end" alignItems="center" >
    <Popup trigger={<Button variant="outlined" style={{marginLeft:"20px"}} position="bottom left">Update Faq</Button>}>
<UpdateFaq Faqdetail={props.Faqdetail}/>
    </Popup>

</Grid>

    </>
  )
};
