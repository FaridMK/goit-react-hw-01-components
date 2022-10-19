import styled from 'styled-components';

export const OnlineIndicater = styled.div`
  background-color: ${props => (props.isOnline ? `green` : `red`)};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

export const FriendListItemContainer = styled.li`
  display: flex;
`;
