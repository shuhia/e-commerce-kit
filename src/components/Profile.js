import React from "react";
import defaultProfileImg from "../images/testimonial-bg.png";

function Profile({ img = defaultProfileImg, width = 84, height = 84 }) {
  return (
    <div className="profile">
      <img
        style={{
          borderRadius: "50%",
          width: width,
          height: height,
          background: "white",
        }}
        className="profile-img"
        src={img}
        alt="profile-image"
      />
    </div>
  );
}

function ProfileIcon({ img = defaultProfileImg }) {
  <div className="profile">
    <img
      style={{
        borderRadius: "50%",
        width: 34,
        height: 34,
        background: "white",
      }}
      className="profile-img"
      src={img}
      alt="profile-image"
    />
  </div>;
}

export default Profile;
