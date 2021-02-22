import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { callApi } from "../api";

const CreatePost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("On Request");
  const [willDeliver, setWillDeliver] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await callApi({
      url: `/posts`,
      body: { post: { title, description, price, location, willDeliver } },
      method: "POST",
      token: token,
    });
    const postSuccess = data?.success;
    if (postSuccess) {
      history.push("/profile");
    }
  };

  return (
    <div id="create">
    <div id="createpost">
      <form onSubmit={handleSubmit}>
          <fieldset>
        <div>
          <legend >Create your own Post:</legend>
          <label>Title*:</label>
          <input
            type="text"
            placeholder="Title*"
            required
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Description*:</label>
          <input
            type="text"
            placeholder="Description*"
            required
            onChange={(event) => setDescription(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Price*:</label>
          <input
            type="text"
            placeholder="Price*"
            required
            onChange={(event) => setPrice(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Location (optional):</label>
          <input
            type="text"
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          ></input>
        </div>
        <div>
        <span>
          <input
            type="checkbox"
            id="willDeliver"
            name="willDeliver"
            value={true}
            onChange={(event) => setWillDeliver(event.target.value)}
          ></input>
          <label> Check if you will deliver</label>
        </span>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
        </fieldset>
      </form>
    </div>
    </div> 
  );
};
export default CreatePost;
