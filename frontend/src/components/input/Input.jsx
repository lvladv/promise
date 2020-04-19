import React, { Component } from "react";
import { connect } from "react-redux";
import { OpenNewCard } from "./OpenNewCard";
import List from "../List/List";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { openNewCard } from "../../store/openNewCard/action";
import { closeNewCard } from "../../store/openNewCard/action";
import { newPointList } from "../../store/list/action";
import { newStatus } from "../../store/list/action";
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
    } = this.props;

    return (
      <section>
        <OpenNewCard
          isOpenNewCard={isOpenNewCard}
          closeNewCard={closeNewCard}
          newPointList={newPointList}
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
          <List newStatus={newStatus} list={list} />
        </Grid>
      </section>
    );
  }
}

const mapStateToprops = (store) => {
  return {
    isOpenNewCard: store.newCardReducer.isOpenNewCard,
    list: store.listReducer.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openNewCard: () => dispatch(openNewCard()),
    closeNewCard: () => dispatch(closeNewCard()),
    newStatus: (newItem) => dispatch(newStatus(newItem)),
    newPointList: (name, description) =>
      dispatch(newPointList(name, description)),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(Input);
