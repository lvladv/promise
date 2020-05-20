import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import blueGrey from "@material-ui/core/colors/blueGrey";

export const SmallButton = styled(({ ...other }) => (
  <Button variant="contained" {...other} />
))({
  background: blueGrey[400],
  color: blueGrey[50],
  minWwidth: "280px",
  margin: "20px 10%",
});

export const ListContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
