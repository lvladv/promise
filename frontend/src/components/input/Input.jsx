import React, { Component } from "react";
import { connect } from "react-redux";
import { OpenNewCard } from "./OpenNewCard";
import List from "./../List/List";
import { ChengesCard } from "./../List/ChangesCard";
import { Grid, Button } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { openNewCard, closeNewCard } from "../../store/openNewCard/action";
import { newPointList, newStatus, changeItem } from "../../store/list/action";
import {
  openChengesCard,
  closeChengesCard,
  putItemChenges,
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
      isOpenNewCard,
      closeNewCard,
      newPointList,
      newStatus,
      openChengesCard,
      closeChengesCard,
      isOpenChangesCard,
      putItemChenges,
      itemChange,
      putNewItem,
      changeItem,
    } = this.props;
    return (
      <section>
        <OpenNewCard
          isOpenNewCard={isOpenNewCard}
          closeNewCard={closeNewCard}
          newPointList={newPointList}
        />
        <ChengesCard
          closeChengesCard={closeChengesCard}
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
            key={list.id}
            newStatus={newStatus}
            list={list}
            openChengesCard={openChengesCard}
            closeChengesCard={closeChengesCard}
            isOpenChangesCard={isOpenChangesCard}
            putItemChenges={putItemChenges}
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
    closeNewCard: () => dispatch(closeNewCard()),
    openChengesCard: () => dispatch(openChengesCard()),
    closeChengesCard: () => dispatch(closeChengesCard()),
    newStatus: (newItem) => dispatch(newStatus(newItem)),
    changeItem: (itemChange) => dispatch(changeItem(itemChange)),
    putItemChenges: (itemChange) => dispatch(putItemChenges(itemChange)),
    putNewItem: (name, value) => dispatch(putNewItem(name, value)),
    newPointList: (name, description) =>
      dispatch(newPointList(name, description)),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(Input);
