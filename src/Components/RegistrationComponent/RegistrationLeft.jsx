import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const RegistrationLeft = () => {
  // ==================== handelEmail funtion implement =====================
  const [Email, setEmail] = useState("");
  const [Emailerror, setEmailerror] = useState("");
  const handelEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  // ==================== handelEmail funtion implement =====================

  // ==================== handelFullName funtion implement ==================
  const [FullName, setFullName] = useState("");
  const [FullNameerror, setFullNameerror] = useState("");
  const handelFullName = (event) => {
    setFullName(event.target.value);
    console.log(event.target.value);
  };
  // ==================== handelFullName funtion implement ==================

  // ==================== handelPassword funtion implement ==================
  const [Password, setPassword] = useState("");
  const [Passworderror, setPassworderror] = useState("");
  const handelPassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  // ==================== handelPassword funtion implement ==================

  // ==================== handelEye funtion implement =======================
  const [Eyeopen, setEyeopen] = useState(true);
  const handelEye = () => {
    setEyeopen(!Eyeopen);
  };
  // ===================== handelEye funtion implement =======================

  // ===================== handelButton funtion implement ====================
  const handelButton = () => {
    if(!Email){
      setEmailerror('Missig your email')
    }else if(!FullName){
      setFullNameerror('Missing your Name')
    }else if(!Password){
      setPassworderror('Your woring password')
    }else{
      alert("Everything Is Ok")
    }
  };
  // ===================== handelButton funtion implement ====================

  return (
    <>
      <div className="w-[60%] h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col gap-y-10">
            {/* ======================= Register ====================== */}
            <div>
              <h1 className="font-nunito text-auth_font_color text-[38.4px] font-semibold leading-[43px]">
                Get started with easily register
              </h1>
              <p className="pt-2 font-nunito text-auth_opasiti_color text-[20.64px] font">
                Free register and you can enjoy it
              </p>
            </div>
            {/* ======================= Register ====================== */}
            {/* ======================= Email ====================== */}

            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-[#11175d37]">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Email Address
                </legend>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handelEmail}
                  className=" placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                  placeholder="Enter your email"
                />
              </fieldset>
              <span className="text-auth_orenge_color">
                {setEmailerror}
              </span>
            </div>
            {/* ======================= Email ====================== */}
            {/* =========================== Full Name ==================== */}

            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-[#11175d37]">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Full Name
                </legend>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handelFullName}
                  className=" placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                  placeholder="Enter your name"
                />
              </fieldset>
              <span className="text-auth_orenge_color">
                {setFullNameerror}
              </span>
            </div>
            {/* =========================== Full Name ====================== */}
            {/* =========================== Password ======================= */}

            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-[#11175d37]">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Password
                </legend>
                <div className="flex items-center">
                  <input
                    type={Eyeopen ? "password" : "text"}
                    name="password"
                    id="password"
                    onChange={handelPassword}
                    className=" placeholder:text-auth_opasiti_color w-full placeholder:text-[40px] p-4"
                    placeholder=".........."
                  />
                  <span
                    className=" pr-5 mt[-10px] cursor-pointer"
                    onClick={handelEye}
                  >
                    {Eyeopen ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </fieldset>
              <span className="text-auth_orenge_color">
                {setPassworderror}
              </span>
            </div>
            {/* =========================== Password ======================= */}
            {/* =========================== Button ======================= */}

            <div className="flex items-center flex-col gap-y-3">
              <button
                className="w-full py-[20px] rounded-[86px] bg-auth_bg_color font-nunito text-[22.64px] text-white font-medium"
                onClick={handelButton}
              >
                Sign up
              </button>
              <p className="font-nunito pt-5 cursor-pointer text-[15px]">
                Already have an account ?
                <span className="text-red-600 font-semibold">Sign In</span>
              </p>
            </div>
            {/* =========================== Button ======================= */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationLeft;
