import React, {useState} from "react";
import { useHistory } from "react-router-dom";


const postMatches = (post, searchTerm) => {
  const searchTermLower = searchTerm.toLowerCase();
  const {
      description,
      location,
      title,
      author: { username },
  } = post;

  const toMatch = [description, location, title, username];
  for (const field of toMatch) {
      if (field.toLowerCase().includes(searchTermLower)) {
          return true;
      }
  }
};




const Posts = ({ posts }) => {
  const history = useHistory();

const [searchTerm, updateSearchTerm] = useState('');

const postsToDisplay =
    searchTerm.length > 0
        ? posts.filter((post) => postMatches(post, searchTerm))
        : posts;

  return (
    <div id="posts">
      
      <div id="search">
      <h2>Search posts:</h2>
      <input
                    type="text"
                    placeholder="Search for posts"
                    value={searchTerm}
                    onChange={(event) => {
                        updateSearchTerm(event.target.value);
                    }}
                />
      </div>
      
<legend>Posts:</legend>
{postsToDisplay.length > 0 ? (
 
                postsToDisplay.map((post) => (
                  
                    <div key={post._id} id="multipost">
                        <h4>{post.title}</h4>
                        <div>Posted by: {post.author.username}</div>
                        <div>Description: {post.description} </div>
                        <button
                            onClick={() => {
                                history.push(`/posts/${post._id}`);
                            }}
                        >
                            View Post
                        </button>
                    </div>
                ))
            ) : (
                <h5>No posts to display</h5>
            )}





    </div>
  );
};

export default Posts;
