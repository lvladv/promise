import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import blueGrey from "@material-ui/core/colors/blueGrey";

export const SmallButton = styled(({ ...other }) => (
  <Button variant="contained" {...other} />
))({
  background: blueGrey[400],
  color: blueGrey[50],
  maxWidth: "280px",

});

export const ListContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const HeadBlock = styled("div")({
  width: "80%",
  height: "auto",
  margin: "20px auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "spaceBetween",
});
export const ButtonBlock = styled("div")({
  flexGrow: 1,
});
