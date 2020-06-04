import React from "react";
import { styled } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";

export const MenuContainer = styled(({ ...other }) => (
  <Drawer variant="permanent" {...other} />
))({
  width: "240px",
  background: "#ffffff",
  zIndex: "250",
  flexShrink: 0,

  "& .MuiDrawer-paper": {
    top: "57px",
    height: "calc(100% - 55px)",
  },
});

export const ListBox = styled("div")({
  padding: "20px 0",
  borderBottom: "1px solid rgba(0, 0, 0, .125) ",
  width: "240px",
  display: "flex",
  flexDirection: "column",
});

export const Point = styled("span")({
  padding: "10px 20px",
  "&:hover": {
    cursor: "pointer",
    background: "#cfd8dc    ",
  },
});

export const TitlePoint = styled("span")({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "spaceBetween",
  fontSize: "16px",
  margin: "0px",
  padding: "10px 20px",
  color: "#78909c",
  "& h3": {
    margin: 0,
  },
  "&:hover": {
    cursor: "pointer",
  },
});
