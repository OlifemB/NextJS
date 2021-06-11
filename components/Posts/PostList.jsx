import React from "react";
import PropTypes from "prop-types";
import { data } from "./data";
import Post from "./Post";

const PostList = () => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <Post {...item} key={`post-${index}`} />
      ))}
    </div>
  );
};

// Posts.propTypes = {
//   data: PropTypes.array.isRequired,
// };

export default PostList;
