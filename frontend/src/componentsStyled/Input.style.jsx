import { styled } from "@material-ui/core/styles";

export const InputContainer = styled("div")({
  flexGrow: 1,
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
  justifyContent: "flex-end",
  padding: "20px 10%",
  margin: "55px auto",
  zIndex: "200",
  background: "#f7f7f7",
});
