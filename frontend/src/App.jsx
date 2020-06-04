import React, { Component } from "react";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Authorisation from "./components/Autorisation/Autorisation";
import { connect } from "react-redux";
import { newTokenFromRefresh } from "./store/token/action";
import { newCategoryList } from "./store/category/action";
import { newList } from "./store/list/action";
import { Container, AuthBox, Main } from "./componentsStyled/App.style";
import Menu from "./components/Menu/Menu";
import Parameters from "./components/Parameters/Parameters";
import OpenNewCard from "./components/Input/OpenNewCard";
class App extends Component {
  async componentDidMount () {
    const {
      isAutorisation,
      newTokenFromRefresh,
      newList,
      newCategoryList,
    } = this.props;
    const remember = (await localStorage.getItem("remember")) === "true";
    const tokenData = await localStorage.getItem("tokenData");
    await newTokenFromRefresh();
    if (remember) {
      if (Date.now() >= tokenData * 5000) {
        newTokenFromRefresh();
      }
    }
    if (isAutorisation) {
      await newCategoryList();
      await newList();
    }
  }

  render() {
    const { isAutorisation, newList, entrance, parameters } = this.props;

    return (
      <Container>
        <Header isAutorisation={isAutorisation} entrance={entrance} />

        {!isAutorisation ? (
          <AuthBox>
            {entrance ? <Authorisation newList={newList} /> : <Registration />}
          </AuthBox>
        ) : (
          <Main>
            <Menu />
            <OpenNewCard />
            {parameters ? <Parameters /> : <Input />}
          </Main>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isAutorisation: store.tokenReducer.isAutorisation,
    entrance: store.changeEntranceReduser.entrance,
    parameters: store.listReducer.parameters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newList: () => dispatch(newList()),
    newTokenFromRefresh: () => dispatch(newTokenFromRefresh()),
    newCategoryList: () => dispatch(newCategoryList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
