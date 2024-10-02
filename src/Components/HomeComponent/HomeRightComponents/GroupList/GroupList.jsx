import React from 'react';
import {PiDotsThreeOutlineVerticalFill} from 'react-icons/pi';
import ProfileGroup from '../../../../assets/ProfileGroup.png';

const GroupList = () => {
  return (
    <div className="w-[400px] h-[320px] p-3 Boxshadow rounded-xl mt-5">
      <div className="flex justify-between">
        <span className="text-black font-poppins text-base">Groups List</span>
        <span className="text-auth_bg_color">
          <PiDotsThreeOutlineVerticalFill />
        </span>
      </div>
      <div className="h-[85%] overflow-y-scroll mt-4">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-between">
            <div>
              <picture>
                <img
                  src={ProfileGroup}
                  alt={ProfileGroup}
                />
              </picture>
            </div>
            <div className="text-wrap w-[50%] text-justify">
              <h3 className="text-black text-base font-poppins font-semibold">
                Friends Reunion
              </h3>
              <p className="text-[#4D4D4DBF] font-normal font-poppins text-xs">
                Hi Guys, Wassup!
              </p>
            </div>
            <div>
              <button className="bg-auth_bg_color text-white px-5 py-1 rounded-md">
                Join
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <picture>
                <img
                  src={ProfileGroup}
                  alt={ProfileGroup}
                />
              </picture>
            </div>
            <div className="text-wrap w-[50%] text-justify">
              <h3 className="text-black text-base font-poppins font-semibold">
                Friends Reunion
              </h3>
              <p className="text-[#4D4D4DBF] font-normal font-poppins text-xs">
                Hi Guys, Wassup!
              </p>
            </div>
            <div>
              <button className="bg-auth_bg_color text-white px-5 py-1 rounded-md">
                Join
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <picture>
                <img
                  src={ProfileGroup}
                  alt={ProfileGroup}
                />
              </picture>
            </div>
            <div className="text-wrap w-[50%] text-justify">
              <h3 className="text-black text-base font-poppins font-semibold">
                Friends Reunion
              </h3>
              <p className="text-[#4D4D4DBF] font-normal font-poppins text-xs">
                Hi Guys, Wassup!
              </p>
            </div>
            <div>
              <button className="bg-auth_bg_color text-white px-5 py-1 rounded-md">
                Join
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <picture>
                <img
                  src={ProfileGroup}
                  alt={ProfileGroup}
                />
              </picture>
            </div>
            <div className="text-wrap w-[50%] text-justify">
              <h3 className="text-black text-base font-poppins font-semibold">
                Friends Reunion
              </h3>
              <p className="text-[#4D4D4DBF] font-normal font-poppins text-xs">
                Hi Guys, Wassup!
              </p>
            </div>
            <div>
              <button className="bg-auth_bg_color text-white px-5 py-1 rounded-md">
                Join
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <picture>
                <img
                  src={ProfileGroup}
                  alt={ProfileGroup}
                />
              </picture>
            </div>
            <div className="text-wrap w-[50%] text-justify">
              <h3 className="text-black text-base font-poppins font-semibold">
                Friends Reunion
              </h3>
              <p className="text-[#4D4D4DBF] font-normal font-poppins text-xs">
                Hi Guys, Wassup!
              </p>
            </div>
            <div>
              <button className="bg-auth_bg_color text-white px-5 py-1 rounded-md">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
