import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import {
  ValidateEmail,
  ValidateName,
  ValidatePassword,
} from "../../Utils/Validate.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Bounce } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader.js";

const RegistrationLeft = () => {
  const auth = getAuth();

  // State for form fields
  const [Email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");
  const [Password, setPassword] = useState("");

  // State for errors
  const [EmailError, setEmailError] = useState("");
  const [FullNameError, setFullNameError] = useState("");
  const [PasswordError, setPasswordError] = useState("");

  //State for loding
  const [Loding, setLoding] = useState(false);

  // Handle input changes
  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleFullName = (event) => {
    setFullName(event.target.value);
    console.log(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  // Toggle password visibility
  const [EyeOpen, setEyeOpen] = useState(true);
  const handleEye = () => {
    setEyeOpen(!EyeOpen);
  };

  // Handle form submission
  const handleButton = () => {
    // Validate fields
    if (!Email || !ValidateEmail(Email)) {
      setEmailError("Please enter your email address.");
    } else if (!FullName || !ValidateName(FullName)) {
      setEmailError("");
      setFullNameError("Please enter your full name.");
    } else if (!Password || !ValidatePassword(Password)) {
      setFullNameError("");
      setPasswordError("Please enter your password.");
    } else {
      setEmailError("");
      setFullNameError("");
      setPasswordError("");
      setLoding(true);
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((userinfo) => {
          toast.success("Your Registrtion Done", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        })
        .then(() => {
          setLoding(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <>
      <div className="w-[60%] h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col gap-y-10">
            {/* Register */}
            <div>
              <h1 className="font-nunito text-auth_font_color text-[38.4px] font-semibold leading-[43px]">
                Get started with easy registration
              </h1>
              <p className="pt-2 font-nunito text-auth_opasiti_color text-[20.64px]">
                Free registration and you can enjoy it
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-[#11175d37]">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Email Address
                </legend>
                <input
                  type="text"
                  name="email"
                  onChange={handleEmail}
                  className=" placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                  placeholder="Enter your email"
                />
              </fieldset>
              <span className="text-auth_orenge_color">{EmailError}</span>
            </div>

            {/* Full Name */}
            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-[#11175d37]">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Full Name
                </legend>
                <input
                  type="text"
                  name="name"
                  onChange={handleFullName}
                  className=" placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                  placeholder="Enter your name"
                />
              </fieldset>
              <span className="text-auth_orenge_color">{FullNameError}</span>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-[#11175d37]">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Password
                </legend>
                <div className="flex items-center">
                  <input
                    type={EyeOpen ? "password" : "text"}
                    name="password"
                    onChange={handlePassword}
                    className=" placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                    placeholder=".........."
                  />
                  <span className="pr-5 cursor-pointer" onClick={handleEye}>
                    {EyeOpen ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </fieldset>
              <span className="text-auth_orenge_color">{PasswordError}</span>
            </div>

            {/* Button */}
            <div className="flex items-center flex-col gap-y-3">
              <button
                className="w-full py-[20px] rounded-[86px] bg-auth_bg_color font-nunito text-[22.64px] text-white font-medium"
                onClick={handleButton}
              >
                {Loding ? (
                  <BeatLoader
                    loading={Loding}
                    color="#FFFFFF"
                    size={22}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  "Sign up"
                )}
              </button>
              <p className="font-nunito pt-5 cursor-pointer text-[15px]">
                Already have an account?
                <span className="text-red-600 font-semibold"> Sign In</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationLeft;
