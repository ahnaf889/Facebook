import React from 'react';
import Search from '../../CommenComponents/Search/Search';
import GroupList from '../HomeRightComponents/GroupList/GroupList';
import FriendList from '../HomeRightComponents/FriendList/FriendList';
import UserList from '../HomeRightComponents/UserList/UserList';
import FriendRequest from '../HomeRightComponents/FriendRequest/FriendRequest';
import Group from '../HomeRightComponents/ Group/ Group';
import BlockedUsers from '../HomeRightComponents/BlockedUsers/BlockedUsers';

const HomeRight = () => {
  return (
    <>
      <div>
        <Search classname={'w-full py-3 rounded-full px-10'} />

        <div className="flex items-center gap-y-6 mt-5 justify-between flex-wrap">
          <GroupList />
          <FriendList />
          <UserList />
          <FriendRequest />
          <Group />
          <BlockedUsers />
        </div>
      </div>
    </>
  );
};

export default HomeRight;
