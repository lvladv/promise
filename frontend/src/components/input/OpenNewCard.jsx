import React, { Component, createRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "34em",
    width: "100%",
    "& > *": {
      margin: theme.spacing(2),
      color: blueGrey[300],
    },
  },
  color: {
    color: blueGrey[400],
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const InputTextField = withStyles({
  root: {
    "& input:valid + fieldset,": {
      borderColor: blueGrey[500],
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: blueGrey[200],
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      bordertWidth: 4,
      borderColor: blueGrey[200],
      padding: "4px !important",
    },
    "& label.Mui-focused": {
      color: blueGrey[700],
    },

    "& textarea + fieldset,": {
      borderColor: blueGrey[500],
      borderWidth: 1,
    },
    "& textarea + fieldset": {
      borderColor: blueGrey[200],
      borderWidth: 1,
    },

    "& textarea:valid:focus + fieldset": {
      bordertWidth: 4,
      borderColor: blueGrey[200],
      padding: "4px !important",
    },
  },
})(TextField);

export const OpenNewCard = ({ isOpenNewCard, closeNewCard, newPointList }) => {
  const classes = useStyles();
  const inputDescription = createRef();
  const inputName = createRef();
  return (
    <Dialog
      id="customized-dialog-title"
      fullWidth={true}
      maxWidth={"sm"}
      aria-labelledby="customized-dialog-title"
      anchor="top"
      open={isOpenNewCard}
      onClose={() => {
        closeNewCard();
      }}
    >
      <DialogTitle id="customized-dialog-title">
        <Typography variant="h6" gutterBottom className={classes.color}>
          Новая задача
        </Typography>

        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={() => closeNewCard()}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Введите название и описание карточки
        </DialogContentText>

        <InputTextField
          label="Название"
          variant="outlined"
          className={classes.root}
          inputRef={inputName}
        />

        <InputTextField
          className={classes.root}
          label="Описание"
          variant="outlined"
          inputRef={inputDescription}
          multiline
          rows="5"
        />
      </DialogContent>
      <DialogActions className={classes.buttonPosition}>
        <Button
          id="standard-multiline-flexible"
          variant="contained"
          style={{
            background: blueGrey[400],
            color: blueGrey[50],
            minWidth: 280,
          }}
          onClick={() => {
            newPointList(
              inputName.current.value,
              inputDescription.current.value
            );
            closeNewCard();
          }}
        >
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
