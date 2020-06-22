import React from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const MessageCard = ({ message, closeMessage }) => {
  return (
    <span>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={Boolean(message)}
        autoHideDuration={6000}
      >
        <Alert
          style={{ background: message === "error" ? "#da1e28" : "#198038" }}
          severity="error"
          action={
            <React.Fragment>
              <IconButton
                onClick={() => closeMessage()}
                size="small"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          {message === "error"
            ? "Ошибка!  Проверьте вправильность ввода или подключение к сети"
            : "Запись успешно создана "}
        </Alert>
      </Snackbar>
    </span>
  );
};
