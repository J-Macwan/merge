import React, { useState } from 'react';

function ProfileHeader() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="profile-header">
      <div className="profile-image-container">
        <img
          src="https://via.placeholder.com/150.png?text=ST"
          alt="Profile"
          className="profile-img"
        />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">Sachin Tendulkar</h1>
        <p className="profile-meta">
          <span>38M followers</span>
          <span> · </span>
          <span>22 following</span>
        </p>
        <button 
          className={`follow-btn ${isFollowing ? 'following' : ''}`}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
