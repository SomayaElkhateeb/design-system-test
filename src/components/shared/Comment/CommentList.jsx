// Muhammed Abdelhakeem

// CommentList.js
import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments, onEdit, onDelete, onAddReply }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          comment={comment}
          onEdit={onEdit}
          onDelete={onDelete}
          onAddReply={onAddReply}
        />
      ))}
    </div>
  );
};

export default CommentList;
