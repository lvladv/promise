import React, { Component, Fragment } from "react";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Autorisation from "./components/Autorisation/Autorisation";
import { connect } from "react-redux";
import {
  newToken,
  newTokenFromRefresh,
  exitAccaunt,
  closeError,
} from "./store/token/action";
import {
  openAuterisation,
  openRegistration,
  openAccauntMenu,
  closeAccauntMenu,
} from "./store/entrance/action";
import { newCategoryList } from "./store/category/action";
import { newUser, closeErrorRegistration } from "./store/registration/action";
import { newList } from "./store/list/action";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  componentDidMount() {
    const {
      isAutorisation,
      newTokenFromRefresh,
      newList,
      newCategoryList,
    } = this.props;
    const remember = localStorage.getItem("remember") === "true";
    const tokenData = localStorage.getItem("tokenData");
    if (remember) {
      newTokenFromRefresh();
      if (Date.now() >= tokenData * 5000) {
        newTokenFromRefresh();
      }
    }
    if (isAutorisation) {
      newCategoryList();
      newList();
    }
  }

  render() {
    const {
      isAutorisation,
      autorisation,
      registration,
      newList,
      entrance,
      openAuterisation,
      openRegistration,
      openAccauntMenu,
      closeAccauntMenu,
      accauntMenu,
      exitAccaunt,
      errorAutorisation,
      closeError,
      registerError,
      closeErrorRegistration,
      okRegistration,
    } = this.props;

    return (
      <div style={{ height: "100vh" }}>
        <Header
          isAutorisation={isAutorisation}
          openAuterisation={openAuterisation}
          entrance={entrance}
          openRegistration={openRegistration}
          openAccauntMenu={openAccauntMenu}
          closeAccauntMenu={closeAccauntMenu}
          accauntMenu={accauntMenu}
          exitAccaunt={exitAccaunt}
        />

        {!isAutorisation ? (
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ height: "90vh" }}
          >
            {entrance ? (
              <Autorisation
                errorAutorisation={errorAutorisation}
                autorisation={autorisation}
                newList={newList}
                closeError={closeError}
              />
            ) : (
              <Registration
                registration={registration}
                registerError={registerError}
                closeErrorRegistration={closeErrorRegistration}
                okRegistration={okRegistration}
              />
            )}
          </Grid>
        ) : (
          <Fragment>
            <Input />
          </Fragment>
        )}
      </div>
    );
  }
}
const mapStateToprops = (store) => {
  return {
    isAutorisation: store.tokenReducer.isAutorisation,
    errorAutorisation: store.tokenReducer.errorAutorisation,
    token: store.tokenReducer.token,
    list: store.listReducer.list,
    completedList: store.completedListReducer.completedList,
    entrance: store.changeEntranceReduser.entrance,
    accauntMenu: store.changeEntranceReduser.accauntMenu,
    registerError: store.registrationReducer.errors,
    okRegistration: store.registrationReducer.okRegistration,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autorisation: (username, password) =>
      dispatch(newToken(username, password)),
    registration: (newEmail, newUsername, newPassword) =>
      dispatch(newUser(newEmail, newUsername, newPassword)),
    newList: () => dispatch(newList()),
    newTokenFromRefresh: () => dispatch(newTokenFromRefresh()),
    openAuterisation: () => dispatch(openAuterisation()),
    openRegistration: () => dispatch(openRegistration()),
    openAccauntMenu: () => dispatch(openAccauntMenu()),
    closeAccauntMenu: () => dispatch(closeAccauntMenu()),
    exitAccaunt: () => dispatch(exitAccaunt()),
    closeError: () => dispatch(closeError()),
    closeErrorRegistration: () => dispatch(closeErrorRegistration()),
    newCategoryList: () => dispatch(newCategoryList()),
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(App);
