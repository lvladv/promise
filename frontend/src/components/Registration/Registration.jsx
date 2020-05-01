import React, {createRef } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField, Grid } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { ErrorRegistration } from "./Error";

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

const Registration = ({ registration, registerError, closeError }) => {
  const neweEmaildValue = createRef();
  const newLoginValue = createRef();
  const newPasswordValue = createRef();
  const classes = useStyles();

  const toAutrosation = () => {
    registration(
      neweEmaildValue.current.value,
      newLoginValue.current.value,
      newPasswordValue.current.value
    );
  };

  return (
    <div className="autor">
      <Grid
        container
        direction="column"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            toAutrosation();
          }
        }}
        alignItems="center"
        justify="flex-start"
      >
        <Typography variant="h2" gutterBottom className={classes.color}>
          Регистрация
        </Typography>

        <InputTextField
          id="outlined"
          placeholder="Логин"
          variant="outlined"
          inputRef={newLoginValue}
          className={classes.root}
        />

        <InputTextField
          id="outlined"
          placeholder="Почта"
          variant="outlined"
          type="email"
          inputRef={neweEmaildValue}
          className={classes.root}
        />
        <InputTextField
          id="outlined"
          placeholder="Пароль"
          variant="outlined"
          type="password"
          inputRef={newPasswordValue}
          className={classes.root}
        />
        <Button size="large" className={classes.root} onClick={toAutrosation}>
          Создать
        </Button>
      </Grid>
      <ErrorRegistration
        registerError={registerError}
        closeError={closeError}
      />
    </div>
  );
};

export default Registration;
