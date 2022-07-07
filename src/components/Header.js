import * as React from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "./klausa.svg"
var classes = {
  logo: {
    margin: "auto",
    textAlign: "center",
    maxWidth: "50%",
    maxHeight: "70%"
  },
  logoHorizontallyCenter: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};
export default function Header() {
  return (
      <AppBar position="static" >
        <Toolbar>
          <div style={classes.logoHorizontallyCenter}>
            <img src={logo} className={classes.logo} alt="logo" />
          </div>
        </Toolbar>
      </AppBar>
  );
}