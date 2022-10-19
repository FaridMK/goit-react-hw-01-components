import PropTypes from 'prop-types';
import userJson from '../assets/user.json';
import dataJson from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile userData={userJson} />
      <Statistics statisticData={dataJson} title={'Upload stats'} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

App.prototype = {
  children: PropTypes.node,
};
