import React from "react";
import logo from "./logo.svg";

function UserProfile(props) {
  return (
    <div className="user-profile">
      <div className="image-wrapper">
        <img
          src={props.avatar_url}
          alt="username"
          className="user-profile-image"
        ></img>
      </div>
      <div className="content">
        <h3>{props.login}</h3>
        <p className="user-id fade-font-color">{props.name}</p>
      </div>
      <p className="fade-font-color">{props.bio}</p>
      <button>Edit Bio</button>
      <div className="address ">
        <p>{props.company}</p>
        <p>{props.location}</p>
        <p>{props.email|| 'Not Available'}</p>
      </div>
    </div>
  );
}
export default UserProfile;