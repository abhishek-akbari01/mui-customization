import React from "react";

const Post = ({ className }) => {
  return (
    <div className={className}>
      <p>Hello World</p>
      <a href="#">This is anchor tag</a>
      <div>This is div tag</div>
    </div>
  );
};

export default Post;
