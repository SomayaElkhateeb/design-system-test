// Muhammed Abdelhakeem

// Comment.js
import React, { useState } from "react";
import { FaUser, FaReply, FaEdit, FaTrash } from "react-icons/fa";

const Comment = ({ comment, onEdit, onDelete, onAddReply }) => {
  const [reply, setReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState([]);

  const handleReply = () => {
    if (replyText) {
      const newReply = {
        user: "Replier",
        text: replyText,
        replies: [],
      };

      setReplies((prevReplies) => [...prevReplies, newReply]);
      setReplyText("");

      if (onAddReply) {
        onAddReply(comment, newReply);
      }
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(comment);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(comment);
    }
  };

  return (
    <div className="flex mb-4">
      <div className="flex-shrink-0">
        <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
          <FaUser className="text-white w-6 h-6" />
        </div>
      </div>
      <div className="ml-4 w-full">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-800">{comment.user}</span>
          <div className="flex items-center space-x-2">
            <button
              className="text-gray-500 hover:underline"
              onClick={() => setReply(true)}
            >
              <FaReply /> Reply
            </button>
            <button
              className="text-gray-500 hover:underline"
              onClick={handleEdit}
            >
              <FaEdit /> Edit
            </button>
            <button
              className="text-gray-500 hover:underline"
              onClick={handleDelete}
            >
              <FaTrash /> Delete
            </button>
          </div>
        </div>
        <p className="text-gray-700">{comment.text}</p>
        <div className="mt-2 space-y-2">
          {replies.map((reply, index) => (
            <Comment
              key={index}
              comment={reply}
              onEdit={onEdit}
              onDelete={onDelete}
              onAddReply={onAddReply}
            />
          ))}
        </div>
        {reply && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Write a reply..."
              className="p-2 w-full border border-gray-300 rounded"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleReply}
            >
              Reply
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
