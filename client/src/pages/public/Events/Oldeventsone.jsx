import React from "react";
import style from "./event.module.css";
import { Grid } from "@mui/material";
const Oldeventone = (props) => {
    return <>
    
    <Grid item xs={12} sm={6} md={4}>
        <div className={style["event-card"]}>
            <div className={style["event-heading"]}>
              {props.data.name}
            </div>
            <div className={style["event-desc"]}>
             {props.data.description}
            </div>
        </div>
    </Grid>
    </>;
};

export default Oldeventone;
