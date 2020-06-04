import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button, IconButton, InputBase } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";

export const SmallButton = styled(({ ...other }) => (
  <Button variant="contained" {...other} />
))({
  background: blueGrey[400],
  color: blueGrey[50],
  maxWidth: "280px",
  marginBottom: "20px",
  marginRight: "20px",
});

export const ParamContainer = styled("div")({
  flexGrow: 1,
  marginTop: "55px",
  padding: "20px 50px",
});

export const RowBox = styled("div")({
  width: "40%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "15px 0",
  // "& span": {
  //   fontSize: "14px",
  //   color: blueGrey[400],
  // },
});

export const ColorBox = styled("span")({
  width: "35px",
  height: "35px",
  borderRadius: "5px",
  marginRight: "10px",
  "&:hover": {
    cursor: "pointer",
  },
});

export const InputCategory = styled(InputBase)({
  fontSize: "15px",
  textAlign: "center",
  border: `1px solid ${blueGrey[500]}`,
  borderRadius: "5px",
  width: "40%",
  padding: "5px 10px",
  outline: "none",
});

export const PointCategory = styled("p")({
  flexGrow: 1,
  margin: 0,
});

export const TitlePoint = styled("span")({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "spaceBetween",
  fontSize: "20px",
  margin: "0px",
  color: "#78909c",
});

export const IconBlock = styled(IconButton)({
  marginLeft: "15px",
  width: "30px",
  height: "30px",
  color: blueGrey[600],
  background: blueGrey[50],
});
