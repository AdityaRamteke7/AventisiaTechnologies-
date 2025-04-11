import React from "react";

interface PullRequestTabsProps {
  activeTab: "conversation" | "commits" | "files";
  onTabChange: (tab: "conversation" | "commits" | "files") => void;
  counts: {
    conversation: number;
    commits: number;
    files: number;
  };
}

const PullRequestTabs: React.FC<PullRequestTabsProps> = ({
  activeTab,
  onTabChange,
  counts,
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <nav className="flex -mb-px">
        <button
          onClick={() => onTabChange("conversation")}
          className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === "conversation"
              ? "border-blue-500 text-blue-600 dark:text-blue-400"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
          }`}
        >
          Conversation{" "}
          <span className="bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-0.5 text-xs ml-1">
            {counts.conversation}
          </span>
        </button>

        <button
          onClick={() => onTabChange("commits")}
          className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === "commits"
              ? "border-blue-500 text-blue-600 dark:text-blue-400"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
          }`}
        >
          Commits{" "}
          <span className="bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-0.5 text-xs ml-1">
            {counts.commits}
          </span>
        </button>

        <button
          onClick={() => onTabChange("files")}
          className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === "files"
              ? "border-blue-500 text-blue-600 dark:text-blue-400"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
          }`}
        >
          Files changed{" "}
          <span className="bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-0.5 text-xs ml-1">
            {counts.files}
          </span>
        </button>
      </nav>
    </div>
  );
};

export default PullRequestTabs;
