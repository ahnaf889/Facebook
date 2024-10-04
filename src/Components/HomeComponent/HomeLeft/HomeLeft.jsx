import React, {useState} from 'react';
import Profile from '../../../assets/ProfilePhotos.png';
import {IoHomeOutline} from 'react-icons/io5';
import {FaFacebookMessenger} from 'react-icons/fa6';
import {FaRegBell} from 'react-icons/fa6';
import {CiSettings} from 'react-icons/ci';
import {LuLogOut} from 'react-icons/lu';
import {NavLink, useLocation} from 'react-router-dom';

const HomeLeft = () => {
  /**
   * todo: test state implemtnt
   * @package({})
   */
  const loction = useLocation();
  const path = loction.pathname.split('/')[1];
  console.log(path);

  return (
    <>
      <div className="bg-auth_bg_color h-[920px] rounded-2xl">
        <div className="flex flex-col items-center justify-centr text-white gap-y-24 w-[186px] mt-14">
          <picture className="cursor-pointer">
            <img
              src={Profile}
              alt={Profile}
            />
          </picture>
          <NavLink to={'/'}>
            <span
              className={`${
                path == '' &&
                'text-[40px] cursor-pointer iconsBg flex rounded-l-lg  text-auth_bg_color bg-white px-16 py-5'
              } text-[40px] cursor-pointer`}
            >
              <IoHomeOutline />
            </span>
          </NavLink>
          <NavLink to={'/chat'}>
            <span
              className={`${
                path == 'chat' &&
                'text-[40px] cursor-pointer iconsBg flex rounded-l-lg  text-auth_bg_color bg-white px-16 py-5'
              } text-[40px] cursor-pointer`}
            >
              <FaFacebookMessenger />
            </span>
          </NavLink>
          <NavLink to={'/notification'}>
            <span
              className={`${
                path == 'notification' &&
                'text-[40px] cursor-pointer iconsBg flex rounded-l-lg  text-auth_bg_color bg-white px-16 py-5'
              } text-[40px] cursor-pointer`}
            >
              <FaRegBell />
            </span>
          </NavLink>
          <NavLink to={'/setting'}>
            <span
              className={`${
                path == 'setting' &&
                'text-[40px] cursor-pointer iconsBg flex rounded-l-lg  text-auth_bg_color bg-white px-16 py-5'
              } text-[40px] cursor-pointer`}
            >
              <CiSettings />
            </span>
          </NavLink>
          <NavLink to={'/logout'}>
            <span
              className={`${
                path == 'logout' &&
                'text-[40px] cursor-pointer iconsBg flex rounded-l-lg  text-auth_bg_color bg-white  px-16 py-5'
              } text-[40px] cursor-pointer`}
            >
              <LuLogOut />
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomeLeft;
