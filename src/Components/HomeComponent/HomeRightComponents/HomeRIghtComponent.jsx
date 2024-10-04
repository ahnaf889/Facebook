import React from 'react';
import GroupList from './GroupList/GroupList.jsx';
import FriendList from './FriendList/FriendList.jsx';
import UserList from './UserList/UserList.jsx';
import FriendRequest from './FriendRequest/FriendRequest.jsx';
import Group from './Group/Group.jsx';
import BlockedUsers from './BlockedUsers/BlockedUsers.jsx';
import Search from '../../CommenComponents/Search/Search.jsx';
const HomeRIghtComponent = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomeRIghtComponent;
