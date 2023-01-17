import { Button, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import { useState } from 'react'
import React from 'react'
import {TextField} from '@mui/material'
import style from "./signup.module.css"
import { useEffect } from 'react'
import axios from 'axios'
export default function Signup() {
  const newd={email:"",
           firstname: "",lastname:"",phonenumber:"",collegename:"",degree:"",branch: "",referralcode:""}
  const [newdata,setnewdata]=useState(newd)
   const getcurrentuser=async()=>{
        try{
              const url = `${process.env.REACT_APP_BACKENDURL}/api/signup`;
              const  data  = await axios.get(url, { withCredentials: true });
              console.log(data.data.email,data.email,data.data.data.email)
              // console.log("data obtaine ",data)
              // setnewdata({...newdata,"email":data.data.data.email});
              // setnewdata({...newdata,"firstname":data.data.data.firstname});
         }catch{
             console.log("data noe sifnufreb");
        }
   }
   const savecurrentuser=async()=>{
       try{
              const url = `${process.env.REACT_APP_BACKENDURL}/api/signup`;
              const  data  = await axios.post(url,newdata);
              console.log("updated afatyvcvwcv",data)
         }catch{
              console.log("data saved sifnufreb");
        }
   }
//   useEffect(()=>{
//     getcurrentuser();
//   },[])
  const signupchange=({currentTarget:input})=>{
    setnewdata({...newdata,[input.name]:input.value});
    console.log("newdtaa" ,newdata)
  }
  return (
    <>
    <div  className={style.container}>
    <div className={style.signform} >
       <div className={style.formstyle}>
    <h1>Sign up</h1>
    <Stack component="form" >
       <Grid container  onSubmit={savecurrentuser}>
       <Grid  item xs={12}sm={6} md={6}display="flex" justifyContent="center" alignItems="center" padding={2} color="yellow">  <TextField   id="outlined-basic" size="small" label="Firstname" value={newdata.firstname} onChange={signupchange}name="firstname"variant="outlined" />
</Grid>
       <Grid  item xs={12}sm={6} md={6}display="flex" justifyContent="center" alignItems="center" padding={2}>  <TextField id="outlined-basic" size="small" label="Lastname" value={newdata.lastname} onChange={signupchange}name="lastname"variant="outlined" />
</Grid>
       <Grid  item xs={12}sm={6} md={6}display="flex" justifyContent="center" alignItems="center"padding={2}>  <TextField id="outlined-basic" size="small" label="Email" value={newdata.email} onChange={signupchange}name="email"variant="outlined" />
</Grid>
       <Grid  item xs={12}sm={6} md={6}display="flex" justifyContent="center" alignItems="center"padding={2}>  <TextField id="outlined-basic" size="small" label="Phonenumber" value={newdata.phonenumber} onChange={signupchange}name="phonenumber"variant="outlined" />
</Grid>
       <Grid  item xs={12}sm={6} md={6}display="flex" justifyContent="center" alignItems="center"padding={2}>  <TextField id="outlined-basic" size="small" label="Collegename" value={newdata.collegename} onChange={signupchange}name="collegename"variant="outlined" />
</Grid>
       <Grid  item xs={12}sm={6} md={6}display="flex" justifyContent="center" alignItems="center"padding={2}>  <TextField id="outlined-basic" size="small" label="Degree" value={newdata.degree} onChange={signupchange}name="degree"variant="outlined" />
</Grid>
       <Grid  item xs={12}sm={6} md={6}display="flex" justifyContent="center" alignItems="center"padding={2}>  <TextField id="outlined-basic" size="small" label="Branch" value={newdata.branch} onChange={signupchange}name="branch"variant="outlined" />
</Grid>
       <Grid  item xs={12}sm={6} md={6}display="flex" justifyContent="center" alignItems="center"padding={2}>  <TextField id="outlined-basic" size="small" label="Referral-code" value={newdata.referralcode} onChange={signupchange}name="referralcode"variant="outlined" />
</Grid>
       <Grid  item xs={12}sm={12} md={12}display="flex" justifyContent="center" alignItems="center"padding={2}>  <Button onClick={savecurrentuser} variant="outlined" >Register</Button>
</Grid>

       </Grid>
    </Stack>
    </div>
    </div>
    </div>
    </>
  )
}
