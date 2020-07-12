import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { newToken, closeError } from "./../../store/token/action";
import { newList } from "./../../store/list/action";
import { ErrorAutorisation } from "./Error";
import { Redirect } from "react-router-dom";

import {
  Input,
  SubmitButton,
  Point,
  Box,
} from "./../../componentsStyled/Registration.style";
import { AuthBox } from "./../../componentsStyled/App.style";

class Authorisation extends Component {
  loginValue = createRef();
  passwordValue = createRef();

  toAutrosation = async () => {
    const { autorisation, newList } = this.props;
    await autorisation(
      this.loginValue.current.value,
      this.passwordValue.current.value
    );
    await newList();
  };

  render() {
    const { errorAutorisation, closeError, isAutorisation } = this.props;
    if (isAutorisation) {
      return <Redirect to="/" />;
    }
    return (
      <AuthBox>
        <Box
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              this.toAutrosation();
            }
          }}
        >
          <Point>Авторизация</Point>

          <Input placeholder="Логин" inputRef={this.loginValue} />
          <Input
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            inputRef={this.passwordValue}
          />
          <SubmitButton onClick={this.toAutrosation}>
            Авторизоваться
          </SubmitButton>
        </Box>
        <ErrorAutorisation
          errorAutorisation={errorAutorisation}
          closeError={closeError}
        />
      </AuthBox>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    errorAutorisation: store.tokenReducer.errorAutorisation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newList: () => dispatch(newList()),
    autorisation: (username, password) =>
      dispatch(newToken(username, password)),
    closeError: () => dispatch(closeError()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Authorisation);
