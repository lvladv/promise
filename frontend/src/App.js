import React, { Component } from "react";
import Input from "./components//input/input";
import Header from "./components/Header/Header";
import Perfom from "./components/perform/perfom";
import Footer from "./components/footer/footer";
import NewAutor from "./components/NewAutor/NewAutor";

class App extends Component {
  constructor() {
    super();
    this.state = {
      completedList: [],
      list: [],
      newAutor: false,
      username: "",
      password: "",
      newUsername: "",
      newPassword: "",
      newEmail: "",
      tokenData: null,
      token: ""
    };
  }
  componentDidMount() {
    this.getListFromToken();
  }

  getListFromToken = async () => {
    await this.newToken();
    const remember = localStorage.getItem("remember") === "true";
    const tokenData = localStorage.getItem("tokenData");

    if (remember) {
      this.setState({ newAutor: true, tokenData });
    }

    if (Date.now() >= this.state.tokenData * 5000) {
      this.newToken();
    }

    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: this.state.token
      }
    };

    let response = await fetch(
      `http://77.244.65.15:3527/api/v1/data/promise/`,
      requestOptions
    );
    let list = await response.json();
    this.setState({ list: list.results });
    console.log(this.state.list);
  };

  newToken = async () => {
    const token = localStorage.getItem("Authorization");
    const tokenRefresh = localStorage.getItem("refresh");
    let formData = new FormData();
    formData.append("refresh", tokenRefresh);
    let requestOptions2 = {
      body: formData,
      method: "POST"
    };

    let resp = await fetch(
      `http://77.244.65.15:3527/api/v1/data/auth/jwt/refresh/`,
      requestOptions2
    );

    let newToken = await resp.json();
    console.log(newToken);
    await localStorage.setItem("Authorization", `Bearer ${newToken.access}`);
    this.setState({ token });
  };

  componentDidUpdate() {
    this.autorisation();
    this.newUser();
  }

  // Аутентификация ------------------------------------------------------------------------------------------------------------------------
  async autorisation() {
    let formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);

    let requestOptions = {
      method: "POST",
      body: formData
    };
    let response = await fetch(
      `http://77.244.65.15:3527/api/v1/data/auth/jwt/create/`,
      requestOptions
    );
    let autor = await response.json();
    if (response.ok) {
      await localStorage.setItem("Authorization", `Bearer ${autor.access}`);
      await localStorage.setItem("remember", "true");
      await localStorage.setItem("tokenData", Date.now());
      await localStorage.setItem("refresh", autor.refresh);
    }
    console.log(autor);
  }

  // регистрация -------------------------------------------------------------------------------------------------------------------------
  async newUser() {
    let formData = new FormData();
    formData.append("username", this.state.newEmail);
    formData.append("password", this.state.newUsername);
    formData.append("email", this.state.newPassword);

    let requestOptions = {
      method: "POST",
      body: formData
    };
    let response = await fetch(
      `http://77.244.65.15:3527/api/v1/data/auth/users/`,
      requestOptions
    );
    let autor = await response.json();
    console.log(autor);
  }

  getLog = async (username, password) => {
    this.setState({
      username,
      password
    });
  };

  getNewLog = async (newEmail, newPassword, newUsername) => {
    this.setState({
      newEmail,
      newUsername,
      newPassword
    });
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
      // eslint-disable-next-line
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
      // eslint-disable-next-line
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
    const { list, completedList, newAutor } = this.state;
    return (
      <div className="wrap">
        <Header />

        {!newAutor ? (
          <NewAutor getLog={this.getLog} getNewLog={this.getNewLog} />
        ) : (
          <main className="main">
            <article>
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
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
