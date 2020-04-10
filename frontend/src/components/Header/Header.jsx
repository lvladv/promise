import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

const Header = ({
  isAutorisation,
  entrance,
  openAuterisation,
  openRegistration,
  openAccauntMenu,
  closeAccauntMenu,
  accauntMenu,
  exitAccaunt,
}) => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: blueGrey[500] }}>
      <Toolbar variant="dense">
        <Typography variant="h4" color="inherit" className={classes.title}>
          Promise
        </Typography>
        {!isAutorisation ? (
          <Fragment>
            {entrance ? (
              <Button color="inherit" onClick={() => openRegistration()}>
                Регистрация
              </Button>
            ) : (
              <Button color="inherit" onClick={() => openAuterisation()}>
                Вход
              </Button>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <IconButton onClick={() => openAccauntMenu()}>
              <AccountCircle style={{ color: blueGrey[50] }} />
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
    </AppBar>
  );
};

export default Header;
