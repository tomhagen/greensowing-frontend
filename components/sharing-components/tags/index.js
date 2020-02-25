import "./index.scss";
import React from "react";

const Tags = ({ tag }) => {
  return (
    <React.Fragment>
      <span className="tags_box">
        <span className="tags_content">{tag.name}</span>
      </span>
    </React.Fragment>
  );
};

export default Tags;
