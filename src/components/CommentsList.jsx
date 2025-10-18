import React from "react";
import Comment from "./Comment";

const CommentsList = ({ data }) => {
  return data.map((singleData, ind) => 
  <div>
    <Comment key={ind} data={singleData} />
    <div className="pl-5 border-l border-l-black ml-5">
        <CommentsList data={singleData.replies} />
    </div>
    </div>);
};

export default CommentsList;
