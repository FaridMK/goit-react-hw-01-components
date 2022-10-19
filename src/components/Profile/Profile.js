import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Profile/Profile.module.css';

const Profile = ({
  userData: {
    avatar,
    stats: { followers, likes, views },
    username,
    location,
    tag,
  },
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li key={followers}>
          <span className={styles.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li key={views}>
          <span className={styles.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li key={likes}>
          <span className={styles.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number,
  likes: PropTypes.number,
  views: PropTypes.number,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
