import React, { Component, Fragment } from "react";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import Perfom from "./components/Perform/Perfom";
import Footer from "./components/Footer/Footer";
import Registration from "./components/Registration/Registration";
import Autorisation from "./components/Autorisation/Autorisation";
import { connect } from "react-redux";
import { newToken } from "./store/token/action";
import { newTokenFromRefresh } from "./store/token/action";
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
    newTokenFromRefresh();
  }

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

  // рендер -----------------------------------------------------------------------
  render() {
    const {
      isAutorisation,
      autorisation,
      registration,
      newList,
      list,
      completedList,
            isOpenTopDraw,
    } = this.props;
    console.log(list);

    return (
      <div style={{ height: "100vh" }}>
        <Header />

        {!isAutorisation ? (
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ height: "90vh" }}
          >
            <Autorisation autorisation={autorisation} newList={newList} />
            {/* <Registration registration={registration} /> */}
          </Grid>
        ) : (
          <Fragment>
            <Input
              list={list}
                          newList={newList}
              isOpenTopDraw={isOpenTopDraw}
            />
          </Fragment>
        )}

        {/* <Footer /> */}
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
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(App);
