import React, { Component } from "react";
import { connect } from "react-redux";
import InputRegistration from "./InputRegistration";
import { GoodRegistration } from "./OkRegistration";
import {
  newUser,
  closeErrorRegistration,
} from "./../../store/registration/action";
import { AuthBox } from "./../../componentsStyled/App.style";

class Registration extends Component {
  render() {
    const { registration, registerError, closeErrorRegistration } = this.props;
    return (
      <AuthBox>
        {this.props.okRegistration ? (
          <GoodRegistration />
        ) : (
          <InputRegistration
            registration={registration}
            registerError={registerError}
            closeErrorRegistration={closeErrorRegistration}
          />
        )}
      </AuthBox>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    registerError: store.registrationReducer.errors,
    okRegistration: store.registrationReducer.okRegistration,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registration: (newEmail, newUsername, newPassword) =>
      dispatch(newUser(newEmail, newUsername, newPassword)),
    closeErrorRegistration: () => dispatch(closeErrorRegistration()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
