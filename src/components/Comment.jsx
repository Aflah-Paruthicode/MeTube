import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-2">
      <img className="w-12 h-12"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="user"
      />
      <div className="px-3">
        <p className="font-semibold text-[14px]">@{name}</p>
        <p>{text}</p>
      </div> 
    </div> 
  );
};

export default Comment;
