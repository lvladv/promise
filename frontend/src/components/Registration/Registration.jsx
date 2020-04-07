import React, { Component, createRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import blueGrey from "@material-ui/core/colors/blueGrey";

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

const Registration = ({ registration }) => {
  const neweEmaildValue = createRef();
  const newLoginValue = createRef();
  const newPasswordValue = createRef();
  const classes = useStyles();

  return (
    <div className="autor">
      <Grid
        container
        direction="column"
 
        alignItems="center"
        justify="flex-start"
      >
        <Typography variant="h2" gutterBottom className={classes.color}>
          Регистрация
        </Typography>

        <InputTextField
          id="outlined"
          label="Логин"
          variant="outlined"
          inputRef={newLoginValue}
          className={classes.root}
        />

        <InputTextField
          id="outlined"
          label="Почта"
          variant="outlined"
          type="email"
          inputRef={neweEmaildValue}
          className={classes.root}
        />
        <InputTextField
          id="outlined"
          label="Пароль"
          variant="outlined"
          type="password"
          inputRef={newPasswordValue}
          className={classes.root}
        />
        <Button
         
          size="large"
          className={classes.root}
          onClick={() =>
            registration(
              neweEmaildValue.current.value,
              newLoginValue.current.value,
              newPasswordValue.current.value
            )
          }
        >
          Создать
        </Button>
      </Grid>
    </div>
  );
};

export default Registration;
