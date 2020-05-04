import React, { createRef } from "react";
import InputRegistration from "./InputRegistration";
import {GoodRegistration} from "./OkRegistration";
const Registration = ({
  registration,
  registerError,
  closeErrorRegistration,
  okRegistration,
}) => {
  return (
    <React.Fragment>
      {okRegistration ? (
        <GoodRegistration />
      ) : (
        <InputRegistration
          registration={registration}
          registerError={registerError}
          closeErrorRegistration={closeErrorRegistration}
        />
      )}
    </React.Fragment>
  );
};

export default Registration;
