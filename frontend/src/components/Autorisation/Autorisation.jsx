import React, { Component, createRef } from "react";
import "./autorisation.scss";

class NewAutor extends Component {
  loginValue = createRef();
  passwordValue = createRef();

  render() {
    const { autorisation, newList } = this.props;
    return (
      <div className="autor">
        <h5>Авторизация </h5>
        <input
          ref={this.loginValue}
          type="text"
          name="login"
          placeholder="логин"
        />
        <input
          ref={this.passwordValue}
          type="text"
          name="password"
          placeholder="пароль"
        />

        <button
          onClick={async () => {
            await autorisation(
              this.loginValue.current.value,
              this.passwordValue.current.value
            );
            await newList();
          }}
        >
          Авторизоваться
        </button>
      </div>
    );
  }
}

export default NewAutor;
