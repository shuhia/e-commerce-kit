import React from "react";

function Profile({ img = "" }) {
  return (
    <div className="profile">
      <img className="profile-img" src={img} />
    </div>
  );
}

export default Profile;
