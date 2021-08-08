import React from "react";
import defaultProfileImg from "./assets/profiles/profile-1.png";

function Profile({
  img = defaultProfileImg,
  width = 84,
  height = 84,
  name = "name",
}) {
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
        alt={name}
      />
    </div>
  );
}

function ProfileIcon({ img = defaultProfileImg, name = "name" }) {
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
      alt={name}
    />
  </div>;
}

export default Profile;
