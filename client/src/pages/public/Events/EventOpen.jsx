import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './eventopen.module.css'
export default function EventOpen(props) {
    const[eventdata,seteventdata]=useState({data:[]})
    const getevent=async()=>{
        try{   
               const url = `${process.env.REACT_APP_BACKENDURL}/api/events/`;
               const  data  = await axios.get(url);
               setevents((events)=>({
                ...events,
                data:data.data.data
               }))
          }catch{
               console.log("data saved sifnufreb");
         }
    }
    useEffect(()=>{
  getevent();
    },[])
  return (
    <>
    <div style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/home/background.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //   backgroundPosition: "center",
          backgroundAttachment: "fixed",
            height: "100vh",
            width:"100wh"
        }}>
    <div className={styles["container"]}
    >
    <p className={styles["eventname"]}>{eventdata.data.name}</p>
    <br/>
    <p className={styles["eventdesc"]}>{eventdata.data.description}</p>
    <br/>
     {eventdata.data.rulebook_link!=="" && <a href={eventdata.data.rulebook_link} target="_blank" ref="noref"className={styles["eventbutton"]}><button>Rulebook</button></a>}
     <br/>
     {eventdata.data.problemset_link!=="" && <a href={eventdata.data.rulebook_link} target="_blank" ref="noref" className={styles["eventbutton"]}><button>Problem Statement</button></a>}
     <br/>
     <h4 className={styles["eventprice"]}>Prices</h4>
     <p className={styles["price"]}>First : {eventdata.data.prices.first}</p>
     <p className={styles["price"]}>Second : {eventdata.data.prices.Second}</p>
     <p className={styles["price"]}>third : {eventdata.data.prices.third}</p>
    </div>
    </div>
    </>
  )
}
