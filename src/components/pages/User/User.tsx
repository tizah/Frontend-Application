import React from "react";

import "./User.css";

interface UserProps {
  profilePicture: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  backgroundImage: string | undefined;
  position: string | undefined;
  email: string | undefined;
}
const User = ({
  profilePicture,
  firstName,
  lastName,
  backgroundImage,
  position,
  email,
}: UserProps) => {
  return (
    <div className="user">
      <img src="https://dummyimage.com/300/09f/fff.png" alt="backgroundImage" />
      <div className="userImageContainer">
        <div className="profileImage">
          <img src={profilePicture} alt="profile" />
        </div>
        <div className="user-name">
          <p>
            {firstName} {lastName}
          </p>
        </div>
        <div className="user-email">
          <p>{email}</p>
        </div>
        <div className="user-position">
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
