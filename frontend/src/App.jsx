import React, { Component } from "react";
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
import { newPointList } from "./store/list/action";

class App extends Component {
  componentDidMount() {
    const { isAutorisation, newTokenFromRefresh, newList } = this.props;
  if(isAutorisation){
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
  //         completedList.push({
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
      newPointList
    } = this.props;
    console.log(list);

    return (
      <div className="wrap">
        <Header />

        {!isAutorisation ? (
          <article>
            <Autorisation autorisation={autorisation} newList={newList} />
            <Registration registration={registration} />
          </article>
        ) : (
          <main className="main">
            <article>
              <Input
                list={list}
                newPointList={newPointList}
                newList={newList}
              />
            </article>
            <article>
              <Perfom completedList={completedList} />
            </article>
          </main>
        )}

        <Footer />
      </div>
    );
  }
}
const mapStateToprops = store => {
  return {
    isAutorisation: store.tokenReducer.isAutorisation,
    token: store.tokenReducer.token,
    list: store.listReducer.list,
    completedList: store.completedListReducer.completedList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autorisation: (username, password) =>
      dispatch(newToken(username, password)),
    registration: (newEmail, newUsername, newPassword) =>
      dispatch(newUser(newEmail, newUsername, newPassword)),
    newList: () => dispatch(newList()),
    newPointList: description => dispatch(newPointList(description)),
    newTokenFromRefresh: () => dispatch(newTokenFromRefresh())
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(App);
