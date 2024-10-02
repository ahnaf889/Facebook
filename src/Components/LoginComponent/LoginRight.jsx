import React from "react";
import LoginPicture from "../../assets/Login.jpg";

const RegistrationRight = () => {
  return (
    <>
      <div className="w-[40%]">
        <picture>
          <img
            src={LoginPicture}
            alt={LoginPicture}
            className="h-screen w-full"
          />
        </picture>
      </div>
    </>
  );
};

export default RegistrationRight;
