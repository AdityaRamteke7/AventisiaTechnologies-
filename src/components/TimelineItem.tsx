import React from "react";
import Avatar from "./Avatar";
import { User } from "../types/github";

interface TimelineItemProps {
  type: "commit" | "comment" | "review" | "merge";
  user: User;
  date: string;
  children: React.ReactNode;
  className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  type,
  user,
  date,
  children,
  className = "",
}) => {
  const iconMap = {
    commit: "💾",
    comment: "💬",
    review: "👀",
    merge: "🔄",
  };

  return (
    <div className={`flex ${className}`}>
      <div className="flex flex-col items-center mr-4">
        <Avatar src={user.avatar_url} alt={user.login} size="sm" />
        <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
      </div>
      <div className="flex-1 pb-6">
        <div className="flex items-center mb-1">
          <span className="mr-2">{iconMap[type]}</span>
          <a
            href={user.html_url}
            className="font-medium text-gray-900 hover:underline dark:text-white"
          >
            {user.login}
          </a>
          <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
        <div className="pl-6 text-gray-800 dark:text-gray-200">{children}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
