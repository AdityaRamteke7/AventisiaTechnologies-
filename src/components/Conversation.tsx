import React from "react";
import Comment from "./Comment";
import { PullRequest, Comment as CommentType } from "../types/github";
import Avatar from "./Avatar";

interface ConversationProps {
  pr: PullRequest;
  comments: CommentType[];
}

const Conversation: React.FC<ConversationProps> = ({ pr, comments }) => {
  return (
    <div>
      <div className="border border-gray-200 dark:border-gray-700 rounded-md mb-6">
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700 rounded-t-md flex justify-between items-center">
          <div className="flex items-center">
            <Avatar
              src={pr.user.avatar_url}
              alt={pr.user.login}
              size="sm"
              className="mr-2"
            />
            <div>
              <a
                href={pr.user.html_url}
                className="font-medium text-gray-900 hover:underline dark:text-white"
              >
                {pr.user.login}
              </a>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                opened this pull request{" "}
                {new Date(pr.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 text-gray-800 dark:text-gray-200">{pr.body}</div>
      </div>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Conversation;
