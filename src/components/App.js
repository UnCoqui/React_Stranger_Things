import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  LoginPage,
  Posts,
  Post,
  NavBar,
  CreatePost,
  Title,
  SendMessage,
  Profile,
  MyPosts,
  Messages
} from ".";

import { callApi } from "../api";

const fetchUserData = async (token) => {
  const { data } = await callApi({
    url: "/users/me",
    token,
  });

  return data;
};
const fetchPosts = async () => {
  const {
    data: { posts },
  } = await callApi({
    url: "/posts",
  });
  return posts;
};

const App = () => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  // console.log("app", history);

  useEffect(async () => {
    const posts = await fetchPosts();
    setPosts(posts);

    if (!token) {
      setToken(localStorage.getItem("token"));
      return;
    }
    const data = await fetchUserData(token);
    if (data && data.username) {
      setUserData(data);
    }
  }, [token]);

  return (
    <div id="homePage">
      <Title userData={userData} />
      <NavBar
        userData={userData}
        setUserData={setUserData}
        setToken={setToken}
      />
      {userData.username ? (
        ""
      ) : (
        <h3 id="welcome">
          Welcome to our site! You can view our posts or register to create your
          own.
        </h3>
      )}
      <Switch>
        <Route exact path="/posts">
          <Posts posts={posts} />
        </Route>

        <Route path="/register">
          <LoginPage
            action="register"
            setToken={setToken}
            setUserData={setUserData}
          />
        </Route>
        <Route path="/login">
          <LoginPage
            action="login"
            setToken={setToken}
            setUserData={setUserData}
          />
        </Route>
        <Route exact path="/posts/createpost">
          <CreatePost token={token} />
        </Route>
        <Route path="/posts/:postId">
          <Post setPosts={
            setPosts} posts={posts} userData={userData} token={token}/>
        </Route>
        <Route exact path="/profile/messages">
          <Messages userData={userData} setUserData={setUserData}/>
        </Route>
        <Route exact path="/profile/myposts">
          <MyPosts userData={userData} setUserData={setUserData}/>
        </Route>
        <Route exact path="/profile">
          <Profile userData={userData} token={token} posts={posts} />
        </Route>
        <Route path='/sendmessage/:postId'>
        <SendMessage token={token} />

        </Route>
        
      </Switch>
    </div>
  );
};

export default App;
