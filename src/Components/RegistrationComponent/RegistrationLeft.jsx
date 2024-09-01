import React from "react";

const RegistrationLeft = () => {
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
                  <span>*</span>
                </legend>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className=" placeholder:text-auth_opasiti_color placeholder:text-[16px] p-4"
                  placeholder="Enter your email"
                />
              </fieldset>
            </div>
            {/* ======================= Email ====================== */}
            {/* =========================== Full Name ==================== */}

            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-[#11175d37]">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Full Name<span>*</span>
                </legend>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className=" placeholder:text-auth_opasiti_color placeholder:text-[16px] p-4"
                  placeholder="Enter your name"
                />
              </fieldset>
            </div>
            {/* =========================== Full Name ====================== */}
            {/* =========================== Password ======================= */}

            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-[#11175d37]">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Password<span>*</span>
                </legend>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className=" placeholder:text-auth_opasiti_color placeholder:text-[40px] p-4"
                  placeholder=".........."
                />
              </fieldset>
            </div>
            {/* =========================== Password ======================= */}
            {/* =========================== Button ======================= */}

            <div className="flex items-center flex-col gap-y-3">
              <button className="w-full py-[20px] rounded-[86px] bg-auth_bg_color font-nunito text-[22.64px] text-white font-medium">
                Sign up
              </button>
              <p className="font-nunito pt-5 cursor-pointer text-[15px]">
                Already have an account ?{" "}
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
