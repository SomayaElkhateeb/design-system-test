// useComments.js
import { useState } from "react";

const useComments = () => {
  const [comments, setComments] = useState([
    {
      user: "User1",
      text: "Comment 1",
      replies: [
        {
          user: "User2",
          text: "Reply 1",
          replies: [
            {
              user: "User3",
              text: "Nested Reply 1",
            },
          ],
        },
        {
          user: "User4",
          text: "Reply 2",
        },
      ],
    },
    // Add more comments as needed
  ]);

  const addComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  const handleEdit = (editedComment) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment === editedComment
          ? { ...comment, text: "Edited Comment" }
          : comment
      )
    );
  };

  const handleDelete = (deletedComment) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment !== deletedComment)
    );
  };

  const handleAddReply = (parentComment, newReply) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment === parentComment
          ? { ...comment, replies: [...comment.replies, newReply] }
          : comment
      )
    );
  };

  return { comments, addComment, handleEdit, handleDelete, handleAddReply };
};

export default useComments;
