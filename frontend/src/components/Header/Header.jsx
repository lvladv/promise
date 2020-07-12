import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { NavLink  } from "react-router-dom";
import { openAccauntMenu } from "./../../store/entrance/action";
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
      openAccauntMenu,
      accauntMenu,
      exitAccaunt,
    } = this.props;
    return (
      <HeaderBox>
        <Toolbar variant="dense">
          <Logo>Promise</Logo>
          {!isAutorisation ? (
            <Fragment>
              <EnterButton>
                <NavLink  to="/registration">Регистрация</NavLink >
              </EnterButton>

              <EnterButton>
                <NavLink  to="/authorisation">Вход</NavLink >
              </EnterButton>
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
                onClick={() => openAccauntMenu()}
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
    accauntMenu: store.changeEntranceReducer.accauntMenu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openAccauntMenu: () => dispatch(openAccauntMenu()),
    exitAccaunt: () => dispatch(exitAccaunt()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
