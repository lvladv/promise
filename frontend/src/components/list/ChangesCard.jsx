import React, { Component } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Drawer } from "@material-ui/core";
import { connect } from "react-redux";
import {
  closeChangesCard,
  putNewItem,
} from "../../store/ChangesCard/action";
import { changeItem } from "../../store/list/action";
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

class ChangesCard extends Component {
  Change = (e) => {
    const { name, value } = e.target;
    this.props.putNewItem(name, value);
  };

  render() {
    const {
      closeChangesCard,
      isOpenChangesCard,
      itemChange,
      changeItem,
    } = this.props;
    return (
      <Drawer
        anchor="right"
        open={isOpenChangesCard}
        onClose={() => {
          closeChangesCard();
        }}
      >
        <Box>
          <Title>Изменить задачу</Title>
          <СloseButton onClick={() => closeChangesCard()}>
            <CloseIcon />
          </СloseButton>

          <Point>Название: </Point>
          <Input name="name" value={itemChange.name} onChange={this.Change} />

          <Point>Описание: </Point>
          <Input
            name="description"
            value={itemChange.description}
            onChange={this.Change}
            multiline
            rows="5"
          />

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
    );
  }
}

const mapStateToprops = (store) => {
  return {
    isOpenChangesCard: store.changesCardReducer.isOpenChangesCard,
    itemChange: store.changesCardReducer.itemChange,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeChangesCard: () => dispatch(closeChangesCard()),
    changeItem: (itemChange) => dispatch(changeItem(itemChange)),
    putNewItem: (name, value) => dispatch(putNewItem(name, value)),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(ChangesCard);
