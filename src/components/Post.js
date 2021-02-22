import React from 'react';
import { callApi } from '../api';
import { useHistory, useParams } from 'react-router-dom';

const Post = ({posts, setPosts, token, userData}) => {

const myUserName = userData.username;    
const history= useHistory()
const {postId} = useParams();
const post = posts.find((post) => postId === post._id);


const handleClick = () => {
    history.goBack();
  };


const handleDelete = async () => {
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
  if (!post){
    <div>Is loading . . . </div>  
    const myPosts = userData.posts;   
    const singlePost = myPosts.find((post) => postId === post._id);
    // console.log("single posts", singlePost.title);
    return <div id="multipost">Seems like the {singlePost.title} listing is no longer active
    <button onClick={handleClick}>Go back</button>
    </div>
  } 
  const postAuthor = post.author.username;

  return (
    < div id="posts">
      <div id="multipost">  
      <h2>{post.title}</h2>
      <div>Posted by: {post.author.username}</div>
      <div>Description: {post.description} </div>
      <div>Price: {post.price}</div>
      <div>Location: {post.location}</div>
      <div>Delivers: {post.willDeliver ? "Yes" : "No"}</div>
      <button onClick={handleClick}>Go back</button>
      {!token ? (
        ""
      ) : postAuthor === myUserName ? (
        ""
      ) : (
        <button
          onClick={() => {
            history.push(`/sendmessage/${post._id}`);
          }}
        >
          Send Message
        </button>
      )}
      {!token ? (
        ""
      ) : postAuthor != myUserName ? (
        ""
      ) : (
        <button id="deleteButton" onClick={handleDelete}>Delete</button>
      )}
      </div>
    </div>
  );
};

export default Post;

