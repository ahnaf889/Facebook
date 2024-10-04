import React from 'react';
import {PiDotsThreeOutlineVerticalFill} from 'react-icons/pi';
import ProfileGroup from '../../../../assets/ProfileGroup.png';
import {FaPlus} from 'react-icons/fa6';

const UserList = () => {
  return (
    <>
      <div className="w-[520px] h-[390px] p-3 Boxshadow rounded-xl mt-5">
        <div className="flex justify-between">
          <span className="text-black font-poppins text-base font-semibold">
            User List
          </span>
          <span className="text-auth_bg_color cursor-pointer">
            <PiDotsThreeOutlineVerticalFill />
          </span>
        </div>
        <div className="h-[85%] flex flex-col gap-y-5 mt-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-transparent">
          {[...new Array(10)].map((_, index) => (
            <div className="flex border-b-[1px] border-b-black border-opacity-20 pb-5 flex-col gap-y-4">
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
                  <button className="bg-auth_bg_color text-white p-3 rounded-md">
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
