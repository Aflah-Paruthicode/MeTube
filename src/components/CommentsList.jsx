import React, { useState } from "react";
import Comment from "./Comment";

const CommentsList = ({ data,isReply=false }) => {
  const [isOpenComment,setIsOpenComment] = useState(false)
  return data.map((comment, ind) => 
  <div key={ind}  >
    <Comment data={comment?.snippet} isReply={isReply} replyCount={comment?.replies?.comments?.length} toggleReplys={setIsOpenComment} replysToggleValue={isOpenComment} />
    {comment?.replies?.comments?.length > 0 && isOpenComment && (
    <div className="pl-5 ml-5">
        <CommentsList data={comment?.replies?.comments} isReply={true} />
    </div> 
    )}
    </div>);
};

export default CommentsList;
