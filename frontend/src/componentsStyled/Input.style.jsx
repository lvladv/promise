import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import blueGrey from "@material-ui/core/colors/blueGrey";

export const InputContainer = styled("div")({
  flexGrow: 1,
});
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
  position: "fixed",
  width: "calc(80% - 240px)",
  height: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "20px 10%",
  margin: "55px auto",
  zIndex: "200",
  background: "#f7f7f7",
});
export const ButtonBlock = styled("div")({
  flexGrow: 1,
});
