import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {
  openAuterisation,
  openRegistration,
  openAccauntMenu,
  closeAccauntMenu,
} from "./../../store/entrance/action";
import { exitAccaunt } from "./../../store/token/action";
import {
  Logo,
  EnterButton,
  HeaderBox,
  AccountMenu,
} from "./../../componentsStyled/Header.style";

class Header extends Component {
  render() {
    const {
      isAutorisation,
      entrance,
      openAuterisation,
      openRegistration,
      openAccauntMenu,
      closeAccauntMenu,
      accauntMenu,
      exitAccaunt,
    } = this.props;
    return (
      <HeaderBox>
        <Toolbar variant="dense">
          <Logo>Promise</Logo>
          {!isAutorisation ? (
            <Fragment>
              {entrance ? (
                <EnterButton onClick={() => openRegistration()}>
                  Регистрация
                </EnterButton>
              ) : (
                <EnterButton onClick={() => openAuterisation()}>
                  Вход
                </EnterButton>
              )}
            </Fragment>
          ) : (
            <Fragment>
              <IconButton onClick={() => openAccauntMenu()}>
                <AccountMenu />
              </IconButton>

              <Menu
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                open={accauntMenu}
                onClick={() => closeAccauntMenu()}
              >
                <MenuItem>Профиль</MenuItem>
                <MenuItem
                  onClick={() => {
                    exitAccaunt();
                  }}
                >
                  Выйти
                </MenuItem>
              </Menu>
            </Fragment>
          )}
        </Toolbar>
      </HeaderBox>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    accauntMenu: store.changeEntranceReduser.accauntMenu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openAuterisation: () => dispatch(openAuterisation()),
    openRegistration: () => dispatch(openRegistration()),
    openAccauntMenu: () => dispatch(openAccauntMenu()),
    closeAccauntMenu: () => dispatch(closeAccauntMenu()),
    exitAccaunt: () => dispatch(exitAccaunt()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
