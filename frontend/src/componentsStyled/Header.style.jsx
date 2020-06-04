import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button, Typography, AppBar } from "@material-ui/core/";
import AccountCircle from "@material-ui/icons/AccountCircle";

export const Logo = styled(({ ...other }) => (
  <Typography variant="h4" {...other} />
))({
  color: "#ffffff",
  flexGrow: 1,
});

export const EnterButton = styled(Button)({
  color: "#ffffff",
});

export const HeaderBox = styled(AppBar)({
  background: "#607d8b",
  position: "fixed",
  zIndex: "500",
  height: "55px"
});

export const AccountMenu = styled(AccountCircle)({
  color: "#ffffff",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
});
