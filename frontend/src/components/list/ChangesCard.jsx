import React, { Component } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Drawer, RadioGroup, FormControlLabel } from "@material-ui/core";
import { connect } from "react-redux";
import { Category } from "./CategoryList";
import { MessageCard } from "../Messages/MessageCard";
import {
  closeChangesCard,
  putNewItem,
  putNewChangeCategory,
  putHandleChangeImportance,
} from "../../store/ChangesCard/action";
import { changeItem, closeMessage } from "../../store/list/action";
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

class ChangesCard extends Component {
  Change = (e) => {
    const { name, value } = e.target;
    this.props.putNewItem(name, value);
  };
  handleChangeImportance = (e) => {
    const { value } = e.target;
    this.props.putHandleChangeImportance(value);
  };
  render() {
    const {
      closeChangesCard,
      isOpenChangesCard,
      itemChange,
      changeItem,
      categoryList,
      putNewChangeCategory,
      message,
      closeMessage,
    } = this.props;

    return (
      <>
        <Drawer
          anchor="right"
          open={isOpenChangesCard}
          onClose={() => {
            closeChangesCard();
          }}
        >
          <Box>
            <Title>Изменить задачу</Title>
            {/* eslint-disable-next-line */}
            <СloseButton onClick={() => closeChangesCard()}>
              <CloseIcon />
            </СloseButton>

            <Point>Название: </Point>
            <WarrningText>
              *Обязательно для заполнения. Не более 20 символов
            </WarrningText>
            <Input name="name" value={itemChange.name} onChange={this.Change} />

            <Point>Описание: </Point>

            <Input
              name="description"
              value={itemChange.description}
              onChange={this.Change}
              multiline
              rows="5"
            />

            <Point>Категории: </Point>
            <BorderBox>
              <Category
                categoryList={categoryList}
                category={itemChange.category}
                putNewChangeCategory={putNewChangeCategory}
              />
            </BorderBox>
            <Point>Уровень значимости: </Point>
            <BorderBox>
              <RadioGroup
                name="importance"
                value={itemChange.importance}
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
                changeItem(itemChange);
                closeChangesCard();
              }}
            >
              Редактировать
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
    isOpenChangesCard: store.changesCardReducer.isOpenChangesCard,
    itemChange: store.changesCardReducer.itemChange,
    categoryList: store.categoryListReducer.categoryList,
    message: store.listReducer.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    putNewChangeCategory: (value) => dispatch(putNewChangeCategory(value)),
    putHandleChangeImportance: (value) =>
      dispatch(putHandleChangeImportance(value)),
    closeChangesCard: () => dispatch(closeChangesCard()),
    changeItem: (itemChange) => dispatch(changeItem(itemChange)),
    putNewItem: (name, value) => dispatch(putNewItem(name, value)),
    closeMessage: () => dispatch(closeMessage()),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(ChangesCard);
