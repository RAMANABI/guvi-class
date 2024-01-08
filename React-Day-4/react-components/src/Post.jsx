import React from "react";
import Like from "./Like";
import Comment from "./Comment";

function Post() {
  return (
    <div>
      <Like likeName={"Like-1"}></Like>
      <Comment commentname={"Comment 1"}></Comment>
      <Like likeName2={"like 2"}></Like>
      <Comment commentname2={"Comment 2"}></Comment>
    </div>
  );
}

export default Post;
