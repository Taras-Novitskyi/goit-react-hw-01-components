import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';
import { Box } from '../Box/Box';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      width="320px"
      m="10px"
      lineHeight="1"
      borderRadius="4px"
      border="1px solid rgb(222, 222, 222)"
      bg="rgb(249, 249, 249)"
      display="flex"
      flexDirection="column"
    >
      {/* <Box pt="20px" textAlign="center" flexGrow="1"> */}
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      {/* </Box> */}

      <Box
        m='0'
        p='0'
        listStyle="none"
        display="flex"
        justifyContent="space-between"
        as = 'ul'
      >
        {/* <Stats> */}
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
        {/* </Stats> */}
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
