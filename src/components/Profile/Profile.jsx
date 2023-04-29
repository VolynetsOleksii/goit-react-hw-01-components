import PropTypes from 'prop-types';
import {
  ProfileCard,
  UserImg,
  CardContainer,
  Name,
  Paragraph,
  List,
  Li,
  TextSpan,
  NumberSpan,
} from "./Profile.styled.jsx";
export default function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <CardContainer>
        <UserImg src={avatar} alt="user avatar" className="avatar" />
        <Name>{username}</Name>
        <Paragraph>@{tag}</Paragraph>
        <Paragraph>{location}</Paragraph>
      </CardContainer>

      <List>
        <Li>
          <TextSpan>Followers</TextSpan>
          <NumberSpan>{followers}</NumberSpan>
        </Li>
        <Li>
          <TextSpan>Views</TextSpan>
          <NumberSpan>{views}</NumberSpan>
        </Li>
        <Li>
          <TextSpan>Likes</TextSpan>
          <NumberSpan>{likes}</NumberSpan>
        </Li>
      </List>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired, 
  }),
};
