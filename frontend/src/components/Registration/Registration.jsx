import React, { Component, createRef } from "react";
import "./registration.scss";

class NewAutor extends Component {
  neweEmaildValue = createRef();
  newLoginValue = createRef();
  newPasswordValue = createRef();
  


  render() {
    const { registration } = this.props;
    return (
      <div className="autor">
        <h5>Создание нового профиля </h5>
        <input
          ref={this.neweEmaildValue}
          type="email"
          name="email"
          placeholder="почта"
        />
        <input
          ref={this.newLoginValue}
          type="text"
          name="login"
          placeholder="логин"
        />
        <input
          ref={this.newPasswordValue}
          type="text"
          name="password"
          placeholder="пароль"
        />

        <button
          onClick={() =>
            registration(
              this.neweEmaildValue.current.value,
              this.newLoginValue.current.value,
              this.newPasswordValue.current.value
            )
          }
        >
          Создать
        </button>
      </div>
    );
  }
}

export default NewAutor;
