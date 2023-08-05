import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
const PostDetail = () => {
  const { id } = useParams();
  let [body, setBody] = useState("");
  let [userInfo, setUserInfo] = useState("");
  const posts = useSelector((state) =>
    state.posts.find((posts) => posts.id === parseInt(id))
  );

  if (!posts) {
    return <div>Loading...</div>;
  }
  const handleDetailClick = () => {
    setBody(posts.body);
    setUserInfo("");
  };
  const handleUserInfoClick = () => {
    setUserInfo(`Post was posted by ${posts.userId}`);
    setBody("");
  };
  return (
    <div className="post">
      <div className="head">
        <FiArrowLeft />
        <h1>Post Number {id} </h1>
      </div>
      <div className="post-details">
        <img
          src={`https://picsum.photos/200?random=${posts.id}`}
          alt={`Post ${posts.id}`}
        />
        <div className="user-details">
        <div className="buttons">
          <button
            className="detail-btn"
            type="submit"
            onClick={handleDetailClick}
          >
            Details
          </button>

          <button
            className="user-btn"
            type="submit"
            onClick={handleUserInfoClick}
          >
            User Info
          </button>
        </div>
        <div >
          {body && <div className="one-item-body">{body}</div>}
          {userInfo && <div className="user-info">{userInfo}</div>}
        </div>
      </div>
        </div>
    </div>
  );
};

// export default Detail;
export default PostDetail;
