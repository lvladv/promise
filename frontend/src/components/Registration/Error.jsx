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




export const ErrorRegistration = ({
  registerError,
  closeErrorRegistration,
}) => {
  console.log(registerError)
  return (
    <span>
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
                onClick={() => closeErrorRegistration()}
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

      {/* ---------------------------------- */}

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={registerError.errorEmail}
        autoHideDuration={6000}
      >
        <AlertError
          severity="error"
          action={
            <React.Fragment>
              <IconButton
                onClick={() => closeErrorRegistration()}
                size="small"
                aria-label="close"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          Такой Email уже используется
        </AlertError>
      </Snackbar>
      {/* -------------- */}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={registerError.inputError}
        autoHideDuration={6000}
      >
        <AlertError
          severity="error"
          action={
            <React.Fragment>
              <IconButton
                onClick={() => closeErrorRegistration()}
                size="small"
                aria-label="close"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
         Нарушены правила регистраци
        </AlertError>
      </Snackbar>
      {/* ---------------------- */}
    </span>
  );
};
