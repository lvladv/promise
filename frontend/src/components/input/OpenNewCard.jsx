import React, { createRef, Component } from "react";
import { connect } from "react-redux";
import { Deadline } from "./Deadline";
import {
  closeNewCard,
  importanceChange,
  deadlineChange,
  deadlineTimeChange,
} from "../../store/openNewCard/action";
import { newPointList } from "../../store/list/action";
import { styled } from "@material-ui/core/styles";
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
  InputBase,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

const СloseButton = styled(IconButton)({
  position: "absolute",
  right: 0,
  top: 0,
});

const Title = styled(({ ...other }) => (
  <Typography variant="subtitle1" {...other} />
))({
  color: blueGrey[400],
});

const Point = styled(({ ...other }) => (
  <Typography variant="body2" gutterBottom {...other} />
))({
  color: blueGrey[300],
  fontSize: "19px",
  marginBottom: "5px",
});

const SubmitButton = styled(({ ...other }) => (
  <Button variant="contained" {...other} />
))({
  background: blueGrey[400],
  color: blueGrey[50],
  minWidth: "50%",
});

const Input = styled(InputBase)({
  color: blueGrey[500],
  border: `1px solid ${blueGrey[500]}`,
  borderRadius: "5px",
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
});

class OpenNewCard extends Component {
  inputDescription = createRef();
  inputName = createRef();

  handleChangeImportance = (e) => {
    const { value } = e.target;
    this.props.importanceChange(value);
  };
  render() {
    const {
      isOpenNewCard,
      closeNewCard,
      newPointList,
      importance,
      deadline,
      deadlineTime,
      deadlineChange,
      deadlineTimeChange,
    } = this.props;

    return (
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        anchor="top"
        open={isOpenNewCard}
        onClose={() => {
          closeNewCard();
        }}
        style={{ background: "#78ubb3" }}
      >
        <DialogTitle>
          <Title>Новая задача</Title>
          <СloseButton onClick={() => closeNewCard()}>
            <CloseIcon />
          </СloseButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите название и описание карточки
          </DialogContentText>
          <Point>Название: </Point>
          <Input inputRef={this.inputName} />
          <Point>Описание: </Point>
          <Input inputRef={this.inputDescription} multiline rows="5" />

          <Point>Уровень значимости: </Point>
          <RadioGroup
            name="importance"
            value={importance}
            onChange={this.handleChangeImportance}
          >
            <FormControlLabel value="1" control={<Radio />} label="Не важно" />
            <FormControlLabel value="2" control={<Radio />} label="Важно" />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Очень важно"
            />
          </RadioGroup>
          <Point>Дедлайн: </Point>
          <div>
            <Deadline
              deadline={deadline}
              deadlineChange={deadlineChange}
              deadlineTimeChange={deadlineTimeChange}
              deadlineTime={deadlineTime}
            />
          </div>
        </DialogContent>

        <DialogActions>
          <SubmitButton
            onClick={() => {
              newPointList(
                this.inputName.current.value,
                this.inputDescription.current.value,
                importance,
                deadline,
                deadlineTime
              );
              closeNewCard();
            }}
          >
            Добавить
          </SubmitButton>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToprops = (store) => {
  return {
    isOpenNewCard: store.newCardReducer.isOpenNewCard,
    importance: store.newCardReducer.importance,
    deadline: store.newCardReducer.deadline,
    deadlineTime: store.newCardReducer.deadlineTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeNewCard: () => dispatch(closeNewCard()),
    importanceChange: (value) => dispatch(importanceChange(value)),
    deadlineChange: (date) => dispatch(deadlineChange(date)),
    deadlineTimeChange: (time) => dispatch(deadlineTimeChange(time)),
    newPointList: (name, description, importance, deadline, deadlineTime) =>
      dispatch(
        newPointList(name, description, importance, deadline, deadlineTime)
      ),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(OpenNewCard);
