import React, { Component } from "react";
import Input from "./components//input/input";
import Header from "./components/Header/Header";
import Perfom from "./components/perform/perfom";
import Footer from "./components/footer/footer";
import Password from "./components/password/pasword";

class App extends Component {
  constructor() {
    super();
    this.state = {
      completedList: [],
      list: [],
      login: "a",
      password: "bbbaaawwwqqq"
    };
    this.inputClickAdd = this.inputClickAdd.bind(this);
  }
  async componentDidMount() {
    const{login, password} = this.state;
    console.log(login,password)
    let formData = new FormData();
    formData.append("username", login);
    formData.append("password", password);
  
    var requestOptions = {
      method: "POST",
      body: formData
    };
    let response = await fetch(
      `http://77.244.65.15:3527/auth/jwt/create/`,
      requestOptions
    );
    let list = await response.json();
    console.log(list);
    // this.setState({ list });
  }

  getLog = (login, password) => {
    this.setState({
      login,
      password
    });
    console.log(login, password);
  };

  inputClickAdd = (list, value) => {
    this.setState(() =>
      list.push({
        id: Date.now(),
        description: value,
        status: "no"
      })
    );
  };

  onCheck = id => {
    const { list } = this.state;
    this.setState(() =>
      list.map(item => {
        if (item.id === id) {
          item.status === "yes" ? (item.status = "no") : (item.status = "yes");
        }
      })
    );
  };

  toCompleted = id => {
    const { list, completedList } = this.state;
    this.setState(() =>
      list.map((item, index) => {
        if (item.id === id) {
          completedList.push({
            id: Date.now(),
            description: item.description,
            status: "no"
          });
          list.splice(index, 1);
        }
      })
    );
    console.log(completedList);
  };

  render() {
    const { list, completedList } = this.state;
    return (
      <div className="wrap">
        <Header />
        <main className="main">
          <article>
            <Password getLog={this.getLog} />
            <Input
              list={list}
              on={this.inputClickAdd}
              onCheck={this.onCheck}
              toCompleted={this.toCompleted}
            />
          </article>
          <article>
            <Perfom completedList={completedList} />
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
