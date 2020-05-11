import React, { Component } from "react";
import { connect } from "react-redux";
import OpenNewCard from "./OpenNewCard";
import List from "./../List/List";
import { ChangesCard } from "./../List/ChangesCard";
import { Grid, Button } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { openNewCard } from "../../store/openNewCard/action";
import { newStatus, changeItem } from "../../store/list/action";
import {
  openChangesCard,
  closeChangesCard,
  putItemChanges,
  putNewItem,
} from "../../store/ChangesCard/action";

import { styled } from "@material-ui/core/styles";

const SmallButton = styled(({ ...other }) => (
  <Button variant="contained" {...other} />
))({
  background: blueGrey[400],
  color: blueGrey[50],
  minWwidth: "280px",
  margin: "20px 0 30px 100px",
});

class Input extends Component {
  render() {
    const {
      list,
      openNewCard,
      newStatus,
      openChangesCard,
      closeChangesCard,
      isOpenChangesCard,
      putItemChanges,
      itemChange,
      putNewItem,
      changeItem,
    } = this.props;
    console.log(list);
    return (
      <section>
        <OpenNewCard />
        <ChangesCard
          closeChangesCard={closeChangesCard}
          isOpenChangesCard={isOpenChangesCard}
          itemChange={itemChange}
          putNewItem={putNewItem}
          changeItem={changeItem}
        />
        <div>
          <SmallButton
            onClick={() => {
              openNewCard();
            }}
          >
            Добавить новую запись
          </SmallButton>
        </div>
        <Grid container direction="column" justify="center" alignItems="center">
          <List
            newStatus={newStatus}
            list={list}
            openChangesCard={openChangesCard}
            closeChangesCard={closeChangesCard}
            isOpenChangesCard={isOpenChangesCard}
            putItemChanges={putItemChanges}
          />
        </Grid>
      </section>
    );
  }
}

const mapStateToprops = (store) => {
  return {
    isOpenNewCard: store.newCardReducer.isOpenNewCard,
    isOpenChangesCard: store.changesCardReducer.isOpenChangesCard,
    itemChange: store.changesCardReducer.itemChange,
    list: store.listReducer.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openNewCard: () => dispatch(openNewCard()),
    openChangesCard: () => dispatch(openChangesCard()),
    closeChangesCard: () => dispatch(closeChangesCard()),
    newStatus: (newItem) => dispatch(newStatus(newItem)),
    changeItem: (itemChange) => dispatch(changeItem(itemChange)),
    putItemChanges: (itemChange) => dispatch(putItemChanges(itemChange)),
    putNewItem: (name, value) => dispatch(putNewItem(name, value)),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(Input);
