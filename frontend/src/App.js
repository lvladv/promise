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
    if (response.status === 401) {
      this.setState({ newAutor: false });
    }
    console.log(list);
    this.setState({ list: list.results });
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
  }

  getLog = async (username, password) => {
    this.setState({
      username,
      password
    });
  };

  // регистрация -------------------------------------------------------------------------------------------------------------------------
  async newUser() {
    let formData = new FormData();
    formData.append("username", this.state.newPassword);
    formData.append("password", this.state.newUsername);
    formData.append("email", this.state.newEmail);

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

  getNewLog = async (newEmail, newPassword, newUsername) => {
    this.setState({
      newEmail,
      newUsername,
      newPassword
    });
  };

  // создание записи --------------------------------------------------------------------------------

  saveList = async () => {
    const { list } =  this.state;
    console.log(list);
    const newPoint  =  list[0];
    console.log(newPoint)
    let formData = new FormData();

    formData.append("name", "123");
    formData.append("description", newPoint.description);

    let requestOptions = {
      body: formData,
      headers: {
        Authorization: this.state.token
      },
      method: "POST"
    };

    let resp = await fetch(
      `http://77.244.65.15:3527/api/v1/data/promise/new/`,
      requestOptions
    );

    console.log(resp.json());
  };

  inputClickAdd =  async(list, value) => {
     await this.setState(() =>
      list.unshift({
        id: Date.now(),
        description: value,
        status: "no"
      })
    );
    await this.saveList();
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

  // рендер -----------------------------------------------------------------------
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
