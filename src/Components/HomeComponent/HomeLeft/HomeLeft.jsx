import React, {useState} from 'react';
import Profile from '../../../assets/ProfilePhotos.png';
import {IoHomeOutline} from 'react-icons/io5';
import {FaFacebookMessenger} from 'react-icons/fa6';
import {FaRegBell} from 'react-icons/fa6';
import {CiSettings} from 'react-icons/ci';
import {LuLogOut} from 'react-icons/lu';

const HomeLeft = () => {
  /**
   * todo: test state implemtnt
   * @package({})
   */
  const [test, settest] = useState('home');

  return (
    <>
      <div className="bg-auth_bg_color w-[186px] h-[920px] rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-y-24  mt-14">
          <picture className=" cursor-pointer">
            <img
              src={Profile}
              alt={Profile}
            />
          </picture>
          <span
            className={`${
              test == 'home' &&
              'text-[40px] cursor-pointer iconsBg rounded-l-lg  text-auth_bg_color bg-white px-16 py-5'
            } text-[40px] cursor-pointer`}
          >
            <IoHomeOutline />
          </span>
          <span
            className={`${
              test == 'chat' &&
              'text-[40px] cursor-pointer iconsBg rounded-l-lg  text-auth_bg_color bg-white px-16 py-5'
            } text-[40px] cursor-pointer`}
          >
            <FaFacebookMessenger />
          </span>
          <span
            className={`${
              test == 'notification' &&
              'text-[40px] cursor-pointer iconsBg rounded-l-lg  text-auth_bg_color bg-white px-16 py-5'
            } text-[40px] cursor-pointer`}
          >
            <FaRegBell />
          </span>
          <span
            className={`${
              test == 'setting' &&
              'text-[40px] cursor-pointer iconsBg rounded-l-lg  text-auth_bg_color bg-white px-16 py-5'
            } text-[40px] cursor-pointer`}
          >
            <CiSettings />
          </span>
          <span
            className={`${
              test == 'logOut' &&
              'text-[40px] cursor-pointer iconsBg rounded-l-lg  text-auth_bg_color bg-white  py-6'
            } text-[40px] cursor-pointer`}
          >
            <LuLogOut />
          </span>
        </div>
      </div>
    </>
  );
};

export default HomeLeft;
