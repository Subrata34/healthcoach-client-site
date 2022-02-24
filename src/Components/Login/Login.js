import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Menubar from '../MenuBar/Menubar'

const Login = () => {
  return (
    <div>
        <Menubar></Menubar>
        <h1>Please Login </h1>
        <form action="">
        <TextField  
        label="Email" 
        variant="standard" 
        style={{width:"20%"}}
        
        />
        <br />
        <br />
        <TextField  
        label="Password" 
        type="password"
        variant="standard" 
        style={{width:"20%"}}
        
        />
        <br /><br />
        <Button variant="contained" type="submit" style={{width:"20%",borderRadius:"15px"}}>Submit</Button>


            </form>
            <br />
            <Link to="/register" style={{textDecoration:"none"}}> <Button style={{borderRadius:"15px"}} variant="contained" >Please Register</Button></Link>
    </div>
  )
}

export default Login