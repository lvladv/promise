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
export const ErrorAutorisation = ({ errorAutorisation, closeError }) => {
  return (
    <span>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={errorAutorisation}
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
          Неверный логин или пароль
        </AlertError>
      </Snackbar>
    </span>
  );
};
