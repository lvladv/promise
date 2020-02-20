import React, { Component, createRef } from "react";

class Password extends Component {
  loginValue = createRef();
  passwordValue = createRef();

  // getLog = e => {
  //   // let myHeaders = new Headers();
  //   // let formdata = new FormData();
  //   // formdata.append("login", "login");
  //   // formdata.append("password", "password");

  //   // var requestOptions = {
  //   //   method: "POST",
  //   // //   headers: myHeaders,
  //   //   body: formdata
  //   //   //   redirect: "follow"
  //   // };

  //   // fetch("http://77.244.65.15:3527/auth/jwt/create/", requestOptions)
  //   //   .then(response => response.text())
  //   //   .then(result => console.log(result))
  //   //   .catch(error => console.log("error", error));
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Content-Type",
  //     "multipart/form-data; boundary=--------------------------064154929087642255061611"
  //   );

  //   var formdata = new FormData();
  //   formdata.append("username", "test_username");
  //   formdata.append("password", "test_password");

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: "follow"
  //   };

  //   fetch("http://77.244.65.15:3527/auth/users/", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log("error", error));
  //   e.preventDefault();
  // };
  handleSubmit = e => {
    console.log(e.target.loginValue);
    console.log(e.target.passwordValue);
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <input
    ref={this.loginValue}
      type="text"
          name="login"
          placeholder="login"
        />
        <input
              ref={this.passwordValue}
          type="text"
          name="password"
          placeholder="password"
        />

        {/* <input type="submit" value="log" /> */}
        <button onClick={
          ()=> this.props.getLog(
            this.loginValue.current.value,
            this.passwordValue.current.value,
            
          )
        }></button>
      </div>
    );
  }
}

export default Password;
