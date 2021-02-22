import React, { useState } from "react";
import { useHistory  } from "react-router-dom";


const Messages = ({ userData }) => {
  
  const myUsername = userData.username;
  const myMessages = userData.messages;
  const history = useHistory();

  if (!myMessages){
    return <div>isLoading</div>
} 

  return (
    <div id="allMessages">
      <h2>Messages to me:</h2>
      {myMessages
        .filter((mess) => mess.fromUser.username != myUsername)
        .map((recMessage) => (
          <div key={recMessage._id} id="toMessages">
            <h3>From: {recMessage.fromUser.username} </h3>
            <div>Message: {recMessage.content} </div>
            <div>Post: {recMessage.post.title} </div>
            <button
              onClick={() => {
                history.push(`/posts/${recMessage.post._id}`);
              }}
            >
              View My Post
            </button>
            <button
              onClick={() => {
                history.goBack();
              }}
            >
              Go back to Profile
            </button>
          </div>
        ))}

      <h2>Messages from me:</h2>
      {myMessages
        .filter((mess) => mess.fromUser.username === myUsername)
        .map((recMessage) => (
          <div key={recMessage._id} id="fromMessages">
            <h3>From: {recMessage.fromUser.username} </h3>
            <div>Message: {recMessage.content} </div>
            <div>Post: {recMessage.post.title} </div>
            <button
              onClick={() => {
                history.push(`/posts/${recMessage.post._id}`);
              }}
            >
              View Post
            </button>
            <button
              onClick={() => {
                history.goBack();
              }}
            >
              Go back to Profile
            </button>
          </div>
        ))}
    </div>
  );
};

export default Messages;
