import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useState} from "react"
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import './de.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        WeOne.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Register() {
  

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const handleclick =async (event)=> 
  {
    console.log("hi");
    await axios.post("http://localhost:3001/users", {
        "Name": name,
        "Email": email,
        "Password": password,
      })
   
  };

  // const[fname,setFName]=useState("");
  // const[lname,setLName]=useState("");
  // const[email,setEmail]=useState("");
  // const[password,setPassword]=useState("");
  // const handleFname=(event)=>
  // {
  //     setFName(event.target.value);
  // }
  // const handleLname=(event)=>
  // {
  //     setLName(event.target.value);
  // }
  // const handleEmail=(event)=>
  // {
  //     setEmail(event.target.value);
  // }
  // const handlePassword=(event)=>
  // {
  //     setPassword(event.target.value);
  // }
  // const handleSubmit=(event)=>
  // {
  //     event.preventDefault();
  //     axios.
  //     post("http://localhost:3001/users",{"fname":fname,"lname":lname,"email":email,"password":password})
  //     .then((res)=>
  //     {
  //         console.log(res.data);
  //     })
  //     .catch((error)=>
  //     {
  //         console.log("Error: "+error);
  //     })
  // }

  return (
   
    <div className="reg">
      <div className="d">
      <ThemeProvider theme={defaultTheme}>
      <Container style={{backgroundColor:'rgba(194, 237, 229, 0.824)',borderRadius:'2px'}} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
              marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleclick} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField 
                  autoComplete="given-name"
                  required
                  fullWidth
                  name="firstName"
                  onChange={(event)=>{setName(event.target.value)}}
                  id="firstName"
                  label="First Name"
                  
                  
                  />
              </Grid>
              
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  // onChange={handleEmail}
                  onChange={(event)=>{setEmail(event.target.value)}}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  // onChange={handlePassword}
                  onChange={(event)=>{setPassword(event.target.value)}}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            
              >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/log" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
      </div>
      </div>
      
    

);
        

}
