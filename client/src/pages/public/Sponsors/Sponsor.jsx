import React from 'react'
import style from "./sponsor.module.css"
import { oldsponsors } from './oldsponsorsinfos'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { useState } from 'react'
import About from '../component/About'
export default function Sponsor() {
    const [oldsponsorsdata,setoldsponsordata]=useState(oldsponsors)
    const [spontype,setspontype]=useState([{"name":"Associate Sponsors"},
  {"name":"Gold Sponsors"},{"name":"Bronze Sponsors"},{"name":"Event Sponsors"},{"name":"Partners"}])
  const observer =new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    })
  })
  // const hiddenE
  return (
    <>
    <About/>
    <div className={style["container"]}>
        <p className={style["heading1"]}>Our Past Sponsors</p>
      {spontype.map((spon)=>{
        return(
        <>
        <p className={style["heading2"]}>{spon.name}</p>
        <Grid container className={style["container2"]}>
          {oldsponsorsdata.map((element)=>{
           return(
            ((element.spon_type==spon.name) &&
            <Grid item xs={12} md={3} sm={12} className={style["sponsordiv"]} rowSpacing={3} >
             <a href={element.spon_sitelink} target="_blank" rel="noreferrer">
                <img src={element.spon_imagelink} alt={element.sponsor_name} />
                {(element.spon_type=="Partners") && 
                <p className={style["eventpartners"]}>{element.spon_additionalinfo}</p>}
             </a>
            </Grid> )
           )
          })}
        </Grid>
        </>
        )

      })}
    </div>
    </>
  )
}
