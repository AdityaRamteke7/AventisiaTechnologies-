import React from "react";
import Avatar from "./Avatar";
import { Commit } from "../types/github";

interface CommitProps {
  commit: Commit;
}

const CommitComponent: React.FC<CommitProps> = ({ commit }) => {
  return (
    <div className="flex items-center py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <div className="mr-3">
        <Avatar
          src={commit.author.avatar_url}
          alt={commit.author.login}
          size="sm"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
          <a href={commit.html_url} className="hover:underline">
            {commit.message}
          </a>
        </div>
        <div className="flex text-xs text-gray-500 dark:text-gray-400">
          <a href={commit.author.html_url} className="hover:underline">
            {commit.author.login}
          </a>
          <span className="mx-1">committed</span>
          <time dateTime={commit.date}>
            {new Date(commit.date).toLocaleDateString()}
          </time>
        </div>
      </div>
      <div className="ml-4">
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
          {commit.sha.substring(0, 7)}
        </span>
      </div>
    </div>
  );
};

export default CommitComponent;
