import PropTypes from 'prop-types';
import { Item, Online, Image, Name } from './FriendList.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Online isOnline={isOnline}></Online>
      <Image className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
