import React from 'react';
import HomeLeft from '../HomeLeft/HomeLeft';
import {Outlet} from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='className="h-screen flex p-8 w-full gap-x-10 '>
      <HomeLeft />
      <Outlet />
    </div>
  );
};

export default RootLayout;
