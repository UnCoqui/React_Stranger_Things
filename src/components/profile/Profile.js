import React from "react";
import { useHistory, Link, Switch, Route } from "react-router-dom";

const Profile = ({ userData, token, posts }) => {
  const history = useHistory();

  // console.log("profile", userData)
  // console.log("messages", myMessages[0].content)
  return (
    <div id="posts">
      <div id="profile">
        <h1>Profile page</h1>
        {userData.username && (
          <div>
            <h3>Hello, {userData.username}!</h3>
          </div>
        )}

        <div>
          <button><Link to="/profile/myposts">My posts</Link></button>
        </div>
        <div>
          <button><Link to="/profile/messages">My Messages</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
