import PropTypes from 'prop-types';
import { FriendListContainer } from './FriendList.styled';
import { FriendsListItem } from 'components/FriendsListItem';

export const FriendsList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(item => (
        <FriendsListItem
          key={item.id}
          name={item.name}
          avatar={item.avatar}
          isOnline={item.isOnline}
        />
      ))}
    </FriendListContainer>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
