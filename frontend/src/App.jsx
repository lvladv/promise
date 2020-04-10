import React, { Component, Fragment } from "react";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import Perfom from "./components/Perform/Perfom";
import Registration from "./components/Registration/Registration";
import Autorisation from "./components/Autorisation/Autorisation";
import { connect } from "react-redux";
import {
  newToken,
  newTokenFromRefresh,
  exitAccaunt,
} from "./store/token/action";
import {
  openAuterisation,
  openRegistration,
  openAccauntMenu,
  closeAccauntMenu,
} from "./store/entrance/action";

import { newUser } from "./store/registration/action";
import { newList } from "./store/list/action";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  componentDidMount() {
    const { isAutorisation, newTokenFromRefresh, newList } = this.props;

    if (isAutorisation) {
      newList();
    }
    const remember = localStorage.getItem("remember") === "true";
    const tokenData = localStorage.getItem("tokenData");

    if (remember) {
      if (Date.now() >= tokenData * 5000) {
        newTokenFromRefresh();
      }
    }
  }

  // рендер -----------------------------------------------------------------------

  render() {
    const {
      isAutorisation,
      autorisation,
      registration,
      newList,
      completedList,
      isOpenTopDraw,
      entrance,
      openAuterisation,
      openRegistration,
      openAccauntMenu,
      closeAccauntMenu,
      accauntMenu,
      exitAccaunt,
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
              <Autorisation autorisation={autorisation} newList={newList} />
            ) : (
              <Registration registration={registration} />
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
    token: store.tokenReducer.token,
    list: store.listReducer.list,
    completedList: store.completedListReducer.completedList,
    entrance: store.changeEntranceReduser.entrance,
    accauntMenu: store.changeEntranceReduser.accauntMenu,
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
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(App);

// toCompleted = id => {

//   const { list, completedList } = this.state;
//   this.setState(() =>
//     // eslint-disable-next-line
//     list.map((item, index) => {
//       if (item.id === id) {
//         completedList.push(
//           id: Date.now(),
//           description: item.description,
//           status: "no"
//         });
//         list.splice(index, 1);
//       }
//     })
//   );
//   console.log(completedList);
// };
