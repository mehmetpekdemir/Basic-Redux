import React from "react";
import { Link } from "react-router-dom";

const BlogListPage = () => {
  return (
    <div>
      <h3>Blog List Page</h3>
      <Link to="/blog/1">Blog 1</Link>
      <Link to="/blog/2">Blog 2</Link>
    </div>
  );
};

export default BlogListPage;
