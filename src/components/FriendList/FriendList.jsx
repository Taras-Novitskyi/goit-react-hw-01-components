import { ListContainer } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ListContainer>
      {friends.map(({ id, isOnline, name, avatar }) => (
		  <FriendListItem key={id} isOnline={isOnline} name={name} avatar={avatar} />
      ))}
    </ListContainer>
  );
};

FriendList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};