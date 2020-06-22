import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button, IconButton, InputBase, Radio } from "@material-ui/core";
import TimeInput from "react-time-input";
import blueGrey from "@material-ui/core/colors/blueGrey";

export const Box = styled("div")({
  padding: "15px",
  width: "350px",
});

export const WarrningText = styled("p")({
  color: "#8d8d8d",
  fontSize: "12px",
});
export const BorderBox = styled("div")({
  border: "1px solid #bdbdbd",
  borderRadius: "4px",
  padding: "10px",
});

export const СloseButton = styled(IconButton)({
  position: "absolute",
  right: 0,
  top: 0,
});

export const Title = styled("span")({
  color: blueGrey[400],
  fontSize: "19px",
});

export const Point = styled("p")({
  color: blueGrey[300],
  fontSize: "16px",
  marginBottom: "5px",
});

export const SubmitButton = styled(({ ...other }) => (
  <Button variant="contained" {...other} />
))({
  margin: "20px 0 10px",
  background: blueGrey[400],
  color: blueGrey[50],
  width: "100%",
});

export const Input = styled(InputBase)({
  color: blueGrey[500],
  border: `1px solid ${blueGrey[500]}`,
  borderRadius: "5px",
  width: "100%",
  padding: "10px",
});

export const DeadlineContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const RowBox = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  "& span": {
    fontSize: "14px",
    color: blueGrey[400],
  },
});

export const DeadlineButton = styled(Button)({
  color: blueGrey[400],
});

export const InputTime = styled(TimeInput)({
  fontSize: "17px",
  textAlign: "center",
  border: `1px solid ${blueGrey[500]}`,
  borderRadius: "5px",
  width: "130px",
  padding: "5px 10px",
  outline: "none",
});

export const RadioBtn = (props) => {
  return <Radio disableRipple color="default" {...props} />;
};
