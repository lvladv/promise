import React, { Component, createRef } from "react";
import "./NewAutor.scss";
 
class NewAutor extends Component {
  loginValue = createRef();
  passwordValue = createRef();

  newLoginValue = createRef();
  newPasswordValue = createRef();
  neweEmaildValue = createRef();


  render() {
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
 

       <button onClick={
          ()=> this.props.getLog(
            this.loginValue.current.value,
            this.passwordValue.current.value,
            
          )
        }>Авторизоваться</button>

        {/* ------------------------------------------------------------------- */}

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
 

       <button onClick={
          ()=> this.props.getNewLog(
            this.neweEmaildValue.current.value,
            this.newLoginValue.current.value,
            this.newPasswordValue.current.value,
            
          )
        }>Создать</button>
      </div>
    );
  }
}

export default NewAutor;
