import React, { Component, createRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "25em",
    "& > *": {
      margin: theme.spacing(2),
      color: blueGrey[300],
    },
  },
  color: {
    color: blueGrey[300],
  },
}));

const InputTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: blueGrey[600],
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: blueGrey[200],
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      bordertWidth: 4,
      borderColor: blueGrey[200],
      padding: "4px !important", // override inline-style
    },
    "& label.Mui-focused": {
      color: blueGrey[700],
    },
  },
})(TextField);

const Autorisation = ({ autorisation, newList }) => {
  const loginValue = createRef();
  const passwordValue = createRef();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        md
        direction="column"
        alignItems="center"
        justify="flex-start"
      >
        <Typography variant="h2" gutterBottom className={classes.color}>
          Авторизация
        </Typography>

        <InputTextField
          className={classes.root}
          id="outlined"
          label="Логин"
          variant="outlined"
          inputRef={loginValue}
        />
        <InputTextField
          className={classes.root}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          inputRef={passwordValue}
        />
        <Button
          size="large"
          className={classes.root}
          onClick={async () => {
            await autorisation(
              loginValue.current.value,
              passwordValue.current.value
            );
            await newList();
          }}
        >
          Авторизоваться
        </Button>
      </Grid>
    </div>
  );
};

export default Autorisation;
