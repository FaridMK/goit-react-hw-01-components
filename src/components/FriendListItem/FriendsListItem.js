import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendListItemContainer,
  OnlineIndicater,
} from './FriendsListItem.styled';

const FriendsListItem = ({ name, avatar, isOnline }) => {
  return (
    <FriendListItemContainer>
      <OnlineIndicater isOnline={isOnline}>.</OnlineIndicater>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendListItemContainer>
  );
};

export default FriendsListItem;

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
