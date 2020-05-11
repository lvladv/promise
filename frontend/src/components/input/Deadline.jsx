import React from "react";
import { format, addDays } from "date-fns";
import TimeInput from "react-time-input";
import { Button, ButtonGroup, InputBase } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { styled } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

export const Deadline = ({ deadline, deadlineChange, deadlineTimeChange, deadlineTime }) => {
  console.log(deadline);

  const handleDateChange = (date) => {
    deadlineChange(format(date, "yyyy-MM-dd"));
  };

  const clickdeadline = (date) => {
    deadlineChange(format(date, "yyyy-MM-dd"));
  };

  const handleChangeTime = (value) => {
    deadlineTimeChange(value);
  };
  return (
    <div>
      <div>
        <ButtonGroup color="primary" orientation="vertical">
          <Button onClick={() => clickdeadline(new Date())}>Сегодня</Button>
          <Button onClick={() => clickdeadline(addDays(new Date(), 1))}>
            Завтра
          </Button>
          <Button onClick={() => clickdeadline(addDays(new Date(), 7))}>
            Через неделю
          </Button>
        </ButtonGroup>
      </div>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy.MM.dd"
          label="Выбрать свою дату"
          value={deadline}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
      <div>
        <TimeInput initTime={deadlineTime} onTimeChange={handleChangeTime} />
      </div>
    </div>
  );
};
