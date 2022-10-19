import React from 'react';
import {
  FriendListItemContainer,
  OnlineIndicater,
} from './FriendsListItem.styled';

const FriendsListItem = ({ name, avatar, isOnline }) => {
  console.log(isOnline);
  return (
    <FriendListItemContainer>
      <OnlineIndicater isOnline={isOnline}>.</OnlineIndicater>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendListItemContainer>
  );
};

export default FriendsListItem;
