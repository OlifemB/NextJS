import React from "react";
import PropTypes from "prop-types";

function Post({ id, title, img, link, text, date }) {
  return (
    <div className="col s12 m4 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light" style={{minHeight: '160px', background: '#333'}}>
          <img className="activator" src={img} />
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>{text}</p>
          <a href={link}>Read more</a>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string,
  // date: PropTypes.data,
};

export default Post;
