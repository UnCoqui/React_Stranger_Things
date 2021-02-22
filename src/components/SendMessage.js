import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { callApi } from '../api';


const SendMessage = ({ token }) => {
    const [messageBody, setMessageBody] = useState("");
    const history = useHistory();
    const { postId } = useParams();
    // console.log("sendmessage", postId)
    const handleSend = async (event) => {
      event.preventDefault();
      const data = await callApi({
        url: `/posts/${postId}/messages`,
        body: { message: { content: messageBody } },
        method: "POST",
        token: token,
      });
      const postSuccess = data?.success;
    if (postSuccess) {
      alert("Message sent!")    
      history.push("/profile");
    }

    };
    return (
      <div>
        <form onSubmit={handleSend}>
          <textarea 
            placeholder="Enter your message here"
            rows={`10`} cols={`40`} required
            value={messageBody}
            onChange={(event) => {
              setMessageBody(event.target.value);
            }}
          />
          <p><button type="submit">
            Send
          </button>
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            Go back to post
          </button></p>

        </form>
      </div>
    );
  };

  export default SendMessage