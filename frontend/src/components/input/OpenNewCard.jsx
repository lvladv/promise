import React, { createRef } from "react";
import { makeStyles, withStyles, styled } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import CloseIcon from "@material-ui/icons/Close";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";

const Title = styled(({ ...other }) => (
  <Typography variant="h5" gutterBottom {...other} />
))({
  color: blueGrey[400],
});
const Point = styled(({ ...other }) => (
  <Typography variant="h6" gutterBottom {...other} />
))({
  color: blueGrey[500],
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "34em",
    width: "100%",
    "& > *": {
      margin: theme.spacing(2),
      color: blueGrey[300],
    },
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
    "& coreel.Mui-focused": {
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
      aria-coreelledby="customized-dialog-title"
      anchor="top"
      open={isOpenNewCard}
      onClose={() => {
        closeNewCard();
      }}
    >
      <DialogTitle id="customized-dialog-title">
        <Title>Новая задача</Title>
        <IconButton
          aria-coreel="close"
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
          coreel="Название"
          variant="outlined"
          className={classes.root}
          inputRef={inputName}
        />

        <InputTextField
          className={classes.root}
          coreel="Описание"
          variant="outlined"
          inputRef={inputDescription}
          multiline
          rows="5"
        />

        <Point>Установить делайн</Point>
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
