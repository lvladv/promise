import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button, Typography, InputBase } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";

export const Input = styled(InputBase)({
  border: `1px solid ${blueGrey[300]}`,
  borderRadius: "5px",
  width: "320px",
  padding: "10px",
  marginBottom: "15px",
});

export const SubmitButton = styled(({ ...other }) => (
  <Button variant="contained" {...other} />
))({
  background: blueGrey[400],
  color: blueGrey[50],
  width: "320px",
});

export const Point = styled(({ ...other }) => (
  <Typography variant="h2" gutterBottom {...other} />
))({
  margin: "20px 0 10px",
  color: blueGrey[400],
  fontSize: "54px",
});

export const Box = styled("div")({
  maxWidth: "400px",
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
