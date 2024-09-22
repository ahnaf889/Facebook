import React from "react";
import RegistrationLeft from "../../Components/RegistrationComponent/RegistrationLeft.jsx";
import RegistrationRight from "../../Components/RegistrationComponent/RegistrationRight.jsx";

const registertionLeft = () => {
  return (
    <>
      <div className="flex justify-between items-center h-screen">
        <RegistrationLeft />
        <RegistrationRight />
      </div>
    </>
  );
};

export default registertionLeft;
