import React from "react";

const BlogDetailsPage = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <h3>Blog Details : {id}</h3>
    </div>
  );
};

export default BlogDetailsPage;
