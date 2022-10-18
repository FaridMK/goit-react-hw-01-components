import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import userJson from '../assets/user.json';
import dataJson from '../assets/data.json';

export const App = () => {
  return (
    <div>
      <Profile userData={userJson} />
      <Statistics statisticData={dataJson} title={'Upload stats'} />
      <FriendList />
    </div>
  );
};
