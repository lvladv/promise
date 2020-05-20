import React from "react";
import { styled } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

import { Typography } from "@material-ui/core";

const Box = styled("div")({
  width: "30%",
  margin: "auto",
  height: "red",
  textAlign: "left",
});

const Title = styled(({ ...other }) => (
  <Typography variant="h5" gutterBottom {...other} />
))({
  color: blueGrey[400],
});

export const GoodRegistration = () => {
  return (
    <Box>
      <Title>Регистация прошла успешно...</Title>
      <Title>Пожалуйста авторизуйтесь</Title>
    </Box>
  );
};
