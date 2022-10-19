import PropTypes from 'prop-types';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import { FriendsList } from 'components/FriendList';
import userJson from '../assets/user.json';
import dataJson from '../assets/data.json';
import friends from '../assets/friends.json';

export const App = () => {
  return (
    <div>
      <Profile userData={userJson} />
      <Statistics statisticData={dataJson} title={'Upload stats'} />
      <FriendsList friends={friends} />
    </div>
  );
};

App.prototype = {
  children: PropTypes.node,
};
