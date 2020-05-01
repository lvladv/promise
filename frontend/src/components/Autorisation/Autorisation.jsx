import React, { createRef } from "react";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ErrorAutorisation } from "./Error";

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
    "& coreel.Mui-focused": {
      color: blueGrey[700],
    },
  },
})(TextField);

const Autorisation = ({
  autorisation,
  newList,
  errorAutorisation,
  closeError,
}) => {
  const loginValue = createRef();
  const passwordValue = createRef();
  const classes = useStyles();

  const toAutrosation = async () => {
    await autorisation(loginValue.current.value, passwordValue.current.value);
    await newList();
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="flex-start"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            toAutrosation();
          }
        }}
      >
        <Typography variant="h2" gutterBottom className={classes.color}>
          Авторизация
        </Typography>

        <InputTextField
          className={classes.root}
          id="outlined"
          placeholder="Логин"
          variant="outlined"
          inputRef={loginValue}
        />
        <InputTextField
          className={classes.root}
          id="outlined-password-input"
          placeholder="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          inputRef={passwordValue}
        />
        <Button size="large" className={classes.root} onClick={toAutrosation}>
          Авторизоваться
        </Button>
      </Grid>
      <ErrorAutorisation
        errorAutorisation={errorAutorisation}
        closeError={closeError}
      />
    </div>
  );
};

export default Autorisation;
