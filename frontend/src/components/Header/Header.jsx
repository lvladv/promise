import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import blueGrey from '@material-ui/core/colors/blueGrey';



const Header = () => {
  console.log(AppBar);
  return (
    
    <AppBar position="static" style = {{background: blueGrey[500]}} >
      <Toolbar variant="dense">
        <Typography variant="h4" color = "inherit" >
          Promise
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
