import React from 'react';
// import styled from 'styled-components';
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
        <li>
          <span className={styles.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
