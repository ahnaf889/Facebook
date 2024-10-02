import React from 'react';
import Search from '../../CommenComponents/Search/Search';
import GroupList from '../HomeRightComponents/GroupList/GroupList';

const HomeRight = () => {
  return (
    <>
      <div>
        <Search classname={'w-[400px] py-3 rounded-full px-10'} />
        <GroupList />
      </div>
    </>
  );
};

export default HomeRight;
