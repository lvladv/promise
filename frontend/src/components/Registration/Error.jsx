import React from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { styled } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AlertError = styled(Alert)({
  background: "#e57373",
});

export const ErrorRegistration = ({ registerError, closeError }) => {
  return (
    <span>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={registerError.validEmail}
        autoHideDuration={6000}
      >
        <AlertError
          severity="error"
          action={
            <React.Fragment>
              <IconButton
                onClick={() => closeError()}
                size="small"
                aria-label="close"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          Неверный Email адрес
        </AlertError>
      </Snackbar>
      {/* 2 */}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={registerError.errorLogin}
        autoHideDuration={6000}
      >
        <AlertError
          severity="error"
          action={
            <React.Fragment>
              <IconButton
                onClick={() => closeError()}
                size="small"
                aria-label="close"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          Такой логин занят
        </AlertError>
      </Snackbar>

      {/* 3 */}

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={registerError.errorPassword}
        autoHideDuration={6000}
      >
        <AlertError
          severity="error"
          action={
            <React.Fragment>
              <IconButton
                onClick={() => closeError()}
                size="small"
                aria-label="close"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          Пароль должен содержать цифры и буквы и не меньше 8 символов
        </AlertError>
      </Snackbar>
      {/* 4 */}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={registerError.errorPasswordLogin}
        autoHideDuration={6000}
      >
        <AlertError
          severity="error"
          action={
            <React.Fragment>
              <IconButton
                onClick={() => closeError()}
                size="small"
                aria-label="close"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          Пароль слишком поход на логин
        </AlertError>
      </Snackbar>
      {/* 5*/}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={registerError.errorPasswordLogin}
        autoHideDuration={6000}
      >
        <AlertError
          severity="error"
          action={
            <React.Fragment>
              <IconButton
                onClick={() => closeError()}
                size="small"
                aria-label="close"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          Пароль слишком поход на логин
        </AlertError>
      </Snackbar>
      {/* 6*/}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={registerError.errorPasswordEmail}
        autoHideDuration={6000}
      >
        <AlertError
          severity="error"
          action={
            <React.Fragment>
              <IconButton
                onClick={() => closeError()}
                size="small"
                aria-label="close"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          Пароль слишком поход на Email
        </AlertError>
      </Snackbar>
      {/* 7*/}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={registerError.errorPasswordShort}
        autoHideDuration={6000}
      >
        <AlertError
          severity="error"
          action={
            <React.Fragment>
              <IconButton
                onClick={() => closeError()}
                size="small"
                aria-label="close"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          Пароль слишком короткий
        </AlertError>
      </Snackbar>
      {/* 8*/}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={registerError.errorLoginChar}
        autoHideDuration={6000}
      >
        <AlertError
          severity="error"
          action={
            <React.Fragment>
              <IconButton
                onClick={() => closeError()}
                size="small"
                aria-label="close"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
      В логине есть символы @/./+/-/_ 
        </AlertError>
      </Snackbar>
    </span>
  );
};
