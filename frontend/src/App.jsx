import React, { Component } from "react";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Authorisation from "./components/Autorisation/Autorisation";
import Menu from "./components/Menu/Menu";
import Parameters from "./components/Parameters/Parameters";
import OpenNewCard from "./components/Input/OpenNewCard";
import { connect } from "react-redux";
import { newTokenFromRefresh } from "./store/token/action";
import { newCategoryList } from "./store/category/action";
import { newList } from "./store/list/action";
import { Container, AuthBox, Main } from "./componentsStyled/App.style";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  async componentDidMount() {
    const {
      isAutorisation,
      newTokenFromRefresh,
      newList,
      newCategoryList,
    } = this.props;
    const remember = (await localStorage.getItem("remember")) === "true";
    const tokenData = await localStorage.getItem("tokenData");

    if (remember) {
      if (isAutorisation) {
        await newTokenFromRefresh();
        await newCategoryList();
        await newList();
      }
      if (Date.now() >= tokenData * 5000) {
        newTokenFromRefresh();
      }
    }
  }

  render() {
    const { isAutorisation, parameters } = this.props;

    return (
      <Switch>
        <Container>
          <Header isAutorisation={isAutorisation} />
          {!isAutorisation ? (
            <AuthBox>
              <Route
                exact
                component={Authorisation}
                path="/"
                
              />
              <Route exact component={Registration} path="/registration" />
            </AuthBox>
          ) : (
            <Main>
              <Menu />
              <OpenNewCard />
              <Route component={Input} path="/" exact />
              <Route component={Parameters} path="/settings" />
            </Main>
          )}
        </Container>
       </Switch>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isAutorisation: store.tokenReducer.isAutorisation,
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
