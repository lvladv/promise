import React, { Component, createRef } from "react";
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
  constructor(props) {
    super(props);
    this.inputClick = this.inputClick.bind(this);
  }


  inputClick() {
    this.props.newPointList(this.inputValue.current.value);

    this.inputValue.current.value = " ";
  }

  render() {
    const {
      list,
      newList,
      openNewCard,
      isOpenNewCard,
      closeNewCard,
      newPointList
    } = this.props;
    console.log(openNewCard);
    return (
      <section>
        <OpenNewCard
          isOpenNewCard={isOpenNewCard}
          closeNewCard={closeNewCard}
          newPointList={newPointList}
        />

        <Box pl={8} pt={3}>
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

  
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          style={{ height: "90vh" }}
        >
          <List list={list} />
        </Grid>
      </section>
    );
  }
}

const mapStateToprops = (store) => {
  return {
    isOpenNewCard: store.newCardReducer.isOpenNewCard,
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    openNewCard: () => dispatch(openNewCard()),
    closeNewCard: () => dispatch(closeNewCard()),
    newPointList: (name, description) => dispatch(newPointList(name, description)),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(Input);
