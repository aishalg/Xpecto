import React from "react";
import style from "./event.module.css";
import { Grid } from "@mui/material";
import { oldeventdetails } from "./oldevents";
import { useState } from "react";
import Oldeventone from "./Oldeventsone";
const Event = () => {
    const [eventdetails ,seteventdetails]=useState(oldeventdetails)
    return <>
    <p className={style.heading}>Event</p>
    <div >
        <Grid container className={style["event-container"]} display={"flex"} flexDirection={"row"}  justifyContent={"space-between"}>
    {
      oldeventdetails.map((element)=>{
      return(
        <Oldeventone data={element}/>
      )
      })  
    }
    </Grid>
    </div>
    </>;
};

export default Event;
