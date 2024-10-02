import React from 'react';
import HomeLeft from '../../Components/HomeComponent/HomeLeft/HomeLeft';
import HomeRight from '../../Components/HomeComponent/HomeRIght/HomeRight';

const Home = () => {
  return (
    <>
      <div className="h-screen p-8 w-full flex gap-x-10 ">
        <HomeLeft />
        <HomeRight />
      </div>
    </>
  );
};

export default Home;
