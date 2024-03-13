// Muhammed Abdelhakeem

// CommentTest.js
import React, { useState } from "react";
import CommentList from "./CommentList";
import useComments from "./useComments";

const CommentTest = () => {
  const { comments, addComment, handleEdit, handleDelete, handleAddReply } =
    useComments();
  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (userName && commentText) {
      addComment({
        user: userName,
        text: commentText,
        replies: [],
      });
      setUserName(""); // Clear input
      setCommentText(""); // Clear input
    }
  };
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-semibold mb-6">Infinite Nested Comments</h1>

      {/* Add Comment Form */}
      <div className="mb-6">
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-grow p-2 border border-gray-300 rounded"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <textarea
            placeholder="Add a comment..."
            className="flex-grow p-2 border border-gray-300 rounded"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
          onClick={handleAddComment}
        >
          Post Comment
        </button>
      </div>

      {/* Comment List */}
      <div>
        <CommentList
          comments={comments}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAddReply={handleAddReply}
        />
      </div>
    </div>
  );
};

export default CommentTest;
