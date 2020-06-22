import React from "react";
import { styled } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanel,
} from "@material-ui/core/";
import blueGrey from "@material-ui/core/colors/blueGrey";

export const Box = styled("div")({
  width: "80%",
  marginTop: "120px",
  zIndex: "100",
});
export const ButtonBlock = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  marginTop: "20px",
});

export const SmallButton = styled(({ ...other }) => (
  <Button variant="contained" {...other} />
))({
  background: blueGrey[400],
  color: blueGrey[50],
  width: "50%",
});

export const DescriptionItem = styled(({ ...other }) => (
  <Typography component="h6" variant="body1" {...other} />
))({
  color: blueGrey[400],
});

export const Description = styled(({ ...other }) => (
  <Typography component="p" variant="body1" {...other} />
))({
  flexGrow: 1,
});

export const Title = styled(({ ...other }) => (
  <Typography component="h6" variant="body1" {...other} />
))({
  color: "#333333",
  flexGrow: 1,
});

export const Item = styled(({ ...other }) => (
  <Typography component="p" variant="body1" {...other} />
))({
  color: blueGrey[400],
  "& span": {
    color: "#000",
  },
});

export const Card = styled(({ ...other }) => <ExpansionPanel {...other} />)({
  margin: "10px 0",
  width: "100%",
});

export const TitleCard = styled(({ ...other }) => (
  <ExpansionPanelSummary {...other} />
))({
  paddingLeft: 15,
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
  display: "flex",
  justifyContent: "space-between",
  margin: "0px",
});

export const DetailsCard = styled(({ ...other }) => (
  <ExpansionPanelDetails {...other} />
))({
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "space-between",
});

export const SmallBox = styled("div")({
  width: "50%",
  minWidth: 300,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
