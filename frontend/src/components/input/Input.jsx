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

class Input extends Component {

  render() {
    const {
      list,
      openNewCard,
      isOpenNewCard,
      closeNewCard,
      newPointList,
    } = this.props;
    console.log(openNewCard);
    return (
      <section>
        <OpenNewCard
          isOpenNewCard={isOpenNewCard}
          closeNewCard={closeNewCard}
          newPointList={newPointList}
        />

        <Box pl={10} py={5}>
          <Button
            variant="contained"
            style={{
              background: blueGrey[400],
              color: blueGrey[50],
              minWidth: 280,
            }}
            onClick={() => {
              openNewCard();
            }}
          >
            Добавить новую запись
          </Button>
        </Box>

        <Grid container direction="column" justify="center" alignItems="center">
          <List list={list} />
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
    newPointList: (name, description) =>
      dispatch(newPointList(name, description)),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(Input);
