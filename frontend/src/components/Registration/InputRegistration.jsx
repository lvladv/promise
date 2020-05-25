import React, { createRef } from "react";
import { ErrorRegistration } from "./Error";
import {
  Input,
  SubmitButton,
  Point,
  Box,
} from "./../../componentsStyled/Registration.style";

const InputRegistration = ({
  registration,
  registerError,
  closeErrorRegistration,
}) => {
  const neweEmaildValue = createRef();
  const newLoginValue = createRef();
  const newPasswordValue = createRef();

  const toAutrosation = () => {
    registration(
      neweEmaildValue.current.value,
      newLoginValue.current.value,
      newPasswordValue.current.value
    );
  };

  return (
    <div>
      <Box
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            toAutrosation();
          }
        }}
      >
        <Point>Регистрация</Point>

        <Input placeholder="Логин" inputRef={newLoginValue} />

        <Input placeholder="Почта" type="email" inputRef={neweEmaildValue} />

        <Input
          placeholder="Пароль"
          type="password"
          inputRef={newPasswordValue}
        />
        <SubmitButton onClick={toAutrosation}>Создать</SubmitButton>
      </Box>
      <ErrorRegistration
        registerError={registerError}
        closeErrorRegistration={closeErrorRegistration}
      />
    </div>
  );
};

export default InputRegistration;
