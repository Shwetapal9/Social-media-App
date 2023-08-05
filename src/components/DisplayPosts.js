import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../utils/actions";
import { BiSolidChevronRightSquare, BiSearch } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Link to={"/posts/" + post.id}>
      <div className="card">
        <img
          src={`https://picsum.photos/200?random=${post.id}`}
          alt={post.title}
        />
        <div className="details">
          <h2>{post.title}</h2>
          <div className="description">
            <p>
              {post.body},<span> Read more...</span>
            </p>
            <BiSolidChevronRightSquare />
          </div>
        </div>
      </div>
    </Link>
  );
};

const PostList = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div class="body">
        <h1>Social Media For Travellers</h1>
        <div className="search-bar">
          <BiSearch />
          <input
            type="text"
            className="search-input"
            placeholder="Search here..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="container">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
