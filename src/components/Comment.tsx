import React from "react";
import Avatar from "./Avatar";
import { Comment } from "../types/github";

interface CommentProps {
  comment: Comment;
}

const CommentComponent: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="flex mt-4">
      <div className="mr-4">
        <Avatar src={comment.user.avatar_url} alt={comment.user.login} />
      </div>
      <div className="flex-1 border border-gray-200 dark:border-gray-700 rounded-md">
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700 rounded-t-md flex justify-between items-center">
          <div>
            <a
              href={comment.user.html_url}
              className="font-medium text-gray-900 hover:underline dark:text-white"
            >
              {comment.user.login}
            </a>
            <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
              commented {new Date(comment.created_at).toLocaleDateString()}
            </span>
          </div>
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            ...
          </button>
        </div>
        <div className="p-4 text-gray-800 dark:text-gray-200">
          {comment.body}
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
