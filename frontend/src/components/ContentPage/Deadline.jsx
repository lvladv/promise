import React from "react";
import moment from 'moment';
import { withStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import {
  DeadlineButton,
  RowBox,
  DeadlineContainer,
  InputTime,
} from "../../componentsStyled/OpenNewCard.style";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
});

const Picker = withStyles({
  root: {
    width: "100%",
    margin: "10px 0 25px",
    fontSize: "17px",
    "& label.Mui-focused": {
      color: blueGrey[400],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: blueGrey[400],
    },

    "&:hover .MuiInput-underline:after": {
      borderBottomColor: blueGrey[400],
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: blueGrey[400],
      },
      "&:hover fieldset": {
        borderColor: blueGrey[400],
      },
      "&.Mui-focused fieldset": {
        borderColor: blueGrey[400],
      },
    },
  },
})(KeyboardDatePicker);

export const Deadline = ({
  deadline,
  deadlineChange,
  deadlineTimeChange,
  deadlineTime,
}) => {
  const handleDateChange = (date) => {
    deadlineChange(date);
  };

  const clickdeadline = (date) => {
    deadlineChange(moment(date).format("YYYY-MM-DD"));
  };

  const handleChangeTime = (value) => {
    deadlineTimeChange(value);
  };
  return (
    <DeadlineContainer>
      <RowBox>
        <DeadlineButton onClick={() => clickdeadline(new Date())}>
          Сегодня
        </DeadlineButton>
        <DeadlineButton onClick={() => clickdeadline(moment(new Date()).add('days', 1))}>
          Завтра
        </DeadlineButton>
        <DeadlineButton onClick={() => clickdeadline(moment(new Date()).add('days', 7))}>
          Через неделю
        </DeadlineButton>
      </RowBox>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Picker
            disableToolbar
            variant="inline"
            format="YYYY-MM-DD"
            label="Выбрать свою дату"
            value={deadline}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
      <RowBox>
        <span>Добавить время:</span>
        <InputTime initTime={deadlineTime} onTimeChange={handleChangeTime} />
      </RowBox>
    </DeadlineContainer>
  );
};
