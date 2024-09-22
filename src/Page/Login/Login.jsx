import React from "react";
import LoginLeft from "../../Components/LoginComponent/LoginLeft.jsx";
import LoginRight from "../../Components/LoginComponent/LoginRight.jsx";

const Login = () => {
  return (
    <div className="flex justify-between items-center h-screen">
      <LoginLeft />
      <LoginRight />
    </div>
  );
};

export default Login;
