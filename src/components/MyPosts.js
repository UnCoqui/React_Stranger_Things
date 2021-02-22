import React, { useState } from "react";
import { useHistory  } from "react-router-dom";
import { callApi } from "../api";





const MyPosts = ({ userData, setPosts, posts }) => {

  const handleDelete = async () => {
    // event.preventDefault();
    const { success, error } = await callApi({
      url: `/posts/${post._id}`,
      token: token,
      method: "DELETE",
    });

    if (success) {
        alert("Post is Deleted and will no longer be available!")
        history.push("/profile")  
      setPosts([...posts]);
    }
    else{
        alert("Seems like you are not authorized to delete this post.")
    history.push("/posts");
    }
  };



  const myUsername = userData.username;
  const myPosts = userData.posts;
  const history = useHistory();
  
  if (!myPosts){
    return <div>isLoading</div>
        } 

  return (
    <div id="posts">
      <h2>Posts from me:</h2>
      {myPosts.map((post) => (

<div key={post._id} id="multipost">
  <h3>{post.title} </h3>
  
  <div>Description: {post.description} </div>
  <h4>Active listing? {post.active? "Yes" : "No"}</h4>
  <button
    onClick={() => {
      history.push(`/posts/${post._id}`);
    }}
  >
    View My Post
  </button>
  {/* <button id="deleteButton" onClick={handleDelete}>Delete</button> */}
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
  
  )
};


export default MyPosts;
