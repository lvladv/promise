import React, { Component } from "react";
import { connect } from "react-redux";
import { openNewCard } from "../../store/openNewCard/action";
import OpenNewCard from "./OpenNewCard";
import List from "./../List/List";
import ChangesCard from "./../List/ChangesCard";
import {
  SmallButton,
  ListContainer,

} from "./../../componentsStyled/Item.style";

class Input extends Component {
  render() {
    const { openNewCard } = this.props;

    return (
      <main>
        <OpenNewCard />
        <ChangesCard />

        <SmallButton
          onClick={() => {
            openNewCard();
          }}
        >
          Добавить новую запись
        </SmallButton>

        <ListContainer>
          <List />
        </ListContainer>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openNewCard: () => dispatch(openNewCard()),
  };
};

export default connect(null, mapDispatchToProps)(Input);
