import React, { Component, Fragment } from "react";
import ContentPage from "./components/ContentPage/ContentPage";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Authorisation from "./components/Autorisation/Autorisation";

import { connect } from "react-redux";
import { newTokenFromRefresh } from "./store/token/action";
import { newCategoryList } from "./store/category/action";
import { newList } from "./store/list/action";
import { Container, AuthBox } from "./componentsStyled/App.style";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  refresh() {
    this.props.newTokenFromRefresh();
  }

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
    const { isAutorisation } = this.props;
    return (
      <Switch>
        <Fragment>
          <Container>
            <Header isAutorisation={isAutorisation} />

            <Route
              path="/"
              render={() => <ContentPage isAutorisation={isAutorisation} />}
            />

            <Route
              path="/authorisation"
              render={() => <Authorisation isAutorisation={isAutorisation} />}
            />
            <Route path="/registration" component={Registration} />
          </Container>
        </Fragment>
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
