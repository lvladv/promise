import React, { createRef, Component } from "react";
import { connect } from "react-redux";
import { Deadline } from "./Deadline";
import { Category } from "./Category";
import { Drawer, RadioGroup, FormControlLabel } from "@material-ui/core";
import {
  closeNewCard,
  importanceChange,
  deadlineChange,
  deadlineTimeChange,
  openNewCategory,
} from "../../store/openNewCard/action";
import { putNewCategory, categoryChange } from "./../../store/category/action";
import { newPointList } from "../../store/list/action";
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
 
} from "../../componentsStyled/OpenNewCard.style";

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
      newCategory,
      openNewCategory,
      putNewCategory,
      categoryList,
      category,
      categoryChange,
    } = this.props;
console.log(importance)
    return (
      <Drawer
        anchor="right"
        open={isOpenNewCard}
        onClose={() => {
          closeNewCard();
        }}
      >
        <Box>
          <Title>Новая задача</Title>
          <СloseButton onClick={() => closeNewCard()}>
            <CloseIcon />
          </СloseButton>

          <Point>Название: </Point>
          <Input inputRef={this.inputName} />

          <Point>Описание: </Point>
          <Input inputRef={this.inputDescription} multiline rows="5" />

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
              newCategory={newCategory}
              openNewCategory={openNewCategory}
              putNewCategory={putNewCategory}
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
                value="1"
                control={<RadioBtn />}
                label="Не важно"
              />
              <FormControlLabel
                value="2"
                control={<RadioBtn />}
                label="Важно"
              />
              <FormControlLabel
                value="3"
                control={<RadioBtn />}
                label="Очень важно"
              />
            </RadioGroup>
          </BorderBox>
          <SubmitButton
            onClick={() => {
              newPointList(
                this.inputName.current.value,
                this.inputDescription.current.value,
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
    );
  }
}

const mapStateToprops = (store) => {
  return {
    isOpenNewCard: store.newCardReducer.isOpenNewCard,
    importance: store.newCardReducer.importance,
    deadline: store.newCardReducer.deadline,
    deadlineTime: store.newCardReducer.deadlineTime,
    newCategory: store.newCardReducer.newCategory,
    categoryList: store.categoryListReducer.categoryList,
    category: store.categoryListReducer.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeNewCard: () => dispatch(closeNewCard()),
    putNewCategory: (name) => dispatch(putNewCategory(name)),
    openNewCategory: () => dispatch(openNewCategory()),
    importanceChange: (value) => dispatch(importanceChange(value)),
    categoryChange: (value) => dispatch(categoryChange(value)),
    deadlineChange: (date) => dispatch(deadlineChange(date)),
    deadlineTimeChange: (time) => dispatch(deadlineTimeChange(time)),
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
