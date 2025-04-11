import React from "react";
import Avatar from "./Avatar";
import { PullRequest } from "../types/github";

interface PullRequestHeaderProps {
  pr: PullRequest;
}

const PullRequestHeader: React.FC<PullRequestHeaderProps> = ({ pr }) => {
  const stateColor =
    pr.state === "open"
      ? "bg-green-500"
      : pr.state === "closed"
      ? "bg-red-500"
      : "bg-purple-500";

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold dark:text-white">
          {pr.title}{" "}
          <span className="text-gray-500 dark:text-gray-400">#{pr.number}</span>
        </h1>
        <div className="flex space-x-4">
          <button className="px-4 py-1 text-sm font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md">
            Edit
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center space-x-4">
        <span
          className={`px-2 py-1 text-xs font-medium text-white rounded-full ${stateColor}`}
        >
          {pr.state.charAt(0).toUpperCase() + pr.state.slice(1)}
        </span>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <Avatar
            src={pr.user.avatar_url}
            alt={pr.user.login}
            size="sm"
            className="mr-2"
          />
          <a href={pr.user.html_url} className="font-medium hover:underline">
            {pr.user.login}
          </a>
          <span className="mx-1">opened this pull request</span>
          <time dateTime={pr.created_at}>
            {new Date(pr.created_at).toLocaleDateString()}
          </time>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {pr.labels.map((label) => (
          <span
            key={label.name}
            className="px-2 py-1 text-xs font-medium rounded-full"
            style={{
              backgroundColor: `#${label.color}`,
              color: getContrastColor(label.color),
            }}
          >
            {label.name}
          </span>
        ))}
      </div>
    </div>
  );
};

// Helper function to determine text color based on background color
function getContrastColor(hexColor: string): string {
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "black" : "white";
}

export default PullRequestHeader;
