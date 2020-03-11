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
      };
  }

  async componentDidMount() {
    const remember = localStorage.getItem("remember") === "true";
    const token = localStorage.getItem("Authorization")
    if (remember) {
      this.setState({ newAutor: true });
    }

    let requestOptions = {
      method: "GET",
    headers: {
    'Authorization': token
  }
    };
    let response = await fetch(
      `http://77.244.65.15:3527/prom/`,
      requestOptions
    );
    let list = await response.json();
    this.setState({list})
    console.log(list);
    }

  componentDidUpdate() {
    this.autorisation();
    this.newUser();
  }

  async autorisation() {
    let formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);

    let requestOptions = {
      method: "POST",
      body: formData
    };
    let response = await fetch(
      `http://77.244.65.15:3527/auth/jwt/create/`,
      requestOptions
    );
    let autor = await response.json();
    if (response.ok) {
      await localStorage.setItem("Authorization", `Bearer ${autor.access}`);
      await localStorage.setItem("remember", "true");
    }
    console.log(autor);
  }
  // mrlvladv1
  // 9684998352b
  // mrlvladv2
  // 9684998352c
  // mrlvladv3
  // 9684998352c
  // mrlvladv4
  // 9684998352d
  // mrlvladv6
  // 9684998352f

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
      `http://77.244.65.15:3527/auth/users/`,
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
