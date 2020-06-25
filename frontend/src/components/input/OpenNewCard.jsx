import React, { Component } from "react";
import { connect } from "react-redux";
import { Deadline } from "./Deadline";
import { Category } from "./Category";
import { MessageCard } from "../Messages/MessageCard";
import { Drawer, RadioGroup, FormControlLabel } from "@material-ui/core";
import {
  closeNewCard,
  importanceChange,
  deadlineChange,
  deadlineTimeChange,
} from "../../store/openNewCard/action";
import { categoryChange } from "./../../store/category/action";
import {
  newPointList,
  closeMessage,
  putNewRecord,
} from "../../store/list/action";
import CloseIcon from "@material-ui/icons/Close";

import {
  Box,
  СloseButton,
  Title,
  Point,
  SubmitButton,
  Input,
  BorderBox,
  RadioBtn,
  WarrningText,
} from "../../componentsStyled/OpenNewCard.style";

class OpenNewCard extends Component {
  handleChangeImportance = (e) => {
    const { value } = e.target;
    this.props.importanceChange(value);
  };

  Change = (e) => {
    const { name, value } = e.target;
    this.props.putNewRecord(name, value);
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
      categoryList,
      category,
      categoryChange,
      message,
      closeMessage,
      name,
      description,
    } = this.props;

    return (
      <>
        <Drawer
          anchor="right"
          open={isOpenNewCard}
          onClose={() => {
            closeNewCard();
          }}
        >
          <Box>
            <Title>Новая задача</Title>
            {/* eslint-disable-next-line */}
            <СloseButton onClick={() => closeNewCard()}>
              <CloseIcon />
            </СloseButton>

            <Point>Название: </Point>
            <WarrningText>
              *Обязательно для заполнения. Не более 20 символов
            </WarrningText>
            <Input name="name" value={name} onChange={this.Change} />
            <Point>Описание: </Point>
            <Input
              name="description"
              value={description}
              onChange={this.Change}
              multiline
              rows="5"
            />

            <Point>Дедлайн: </Point>
            <BorderBox>
              <Deadline
                deadline={deadline}
                deadlineChange={deadlineChange}
                deadlineTimeChange={deadlineTimeChange}
                deadlineTime={deadlineTime}
              />
            </BorderBox>

            <Point>Категории: </Point>
            <BorderBox>
              <Category
                categoryList={categoryList}
                category={category}
                categoryChange={categoryChange}
              />
            </BorderBox>
            <Point>Уровень значимости: </Point>
            <BorderBox>
              <RadioGroup
                name="importance"
                value={importance}
                onChange={this.handleChangeImportance}
              >
                <FormControlLabel
                  value="L"
                  control={<RadioBtn />}
                  label="Не важно"
                />
                <FormControlLabel
                  value="M"
                  control={<RadioBtn />}
                  label="Важно"
                />
                <FormControlLabel
                  value="H"
                  control={<RadioBtn />}
                  label="Очень важно"
                />
              </RadioGroup>
            </BorderBox>
            <SubmitButton
              onClick={() => {
                newPointList(
                  name,
                  description,
                  importance,
                  deadline,
                  deadlineTime,
                  category
                );
                closeNewCard();
              }}
            >
              Добавить
            </SubmitButton>
          </Box>
        </Drawer>
        <MessageCard message={message} closeMessage={closeMessage} />
      </>
    );
  }
}

const mapStateToprops = (store) => {
  return {
    isOpenNewCard: store.newCardReducer.isOpenNewCard,
    importance: store.newCardReducer.importance,
    deadline: store.newCardReducer.deadline,
    deadlineTime: store.newCardReducer.deadlineTime,
    categoryList: store.categoryListReducer.categoryList,
    category: store.categoryListReducer.category,
    message: store.listReducer.message,
    name: store.listReducer.name,
    description: store.listReducer.description,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeNewCard: () => dispatch(closeNewCard()),
    putNewRecord: (name, value) => dispatch(putNewRecord(name, value)),
    importanceChange: (value) => dispatch(importanceChange(value)),
    categoryChange: (value) => dispatch(categoryChange(value)),
    deadlineChange: (date) => dispatch(deadlineChange(date)),
    deadlineTimeChange: (time) => dispatch(deadlineTimeChange(time)),
    closeMessage: () => dispatch(closeMessage()),
    newPointList: (
      name,
      description,
      importance,
      deadline,
      deadlineTime,
      category
    ) =>
      dispatch(
        newPointList(
          name,
          description,
          importance,
          deadline,
          deadlineTime,
          category
        )
      ),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(OpenNewCard);
