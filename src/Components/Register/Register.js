import { Button, TextField } from "@mui/material";
import React from "react";
import Menubar from "../MenuBar/Menubar";

const Register = () => {
  return (
    <div>
      <Menubar></Menubar>
      <h1>Please Register</h1>

      <form action="">
        <TextField label="Email" variant="standard" style={{ width: "20%" }} />
        <br />
        <br />
        <TextField
          label="Password"
          type="password"
          variant="standard"
          style={{ width: "20%" }}
        />
        <br />
        <br />
        <TextField
          label="Re Password"
          variant="standard"
          type="password"
          style={{ width: "20%" }}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" style={{ width: "20%",borderRadius:"15px" }}>
          Submit
        </Button>
      </form>
      
    </div>
  );
};

export default Register;
