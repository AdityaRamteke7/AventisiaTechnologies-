import React, { useState } from "react";
//import { useTheme } from "./hooks/useTheme";
import PullRequestHeader from "./components/PullRequestHeader";
import PullRequestTabs from "./components/PullRequestTabs";
import Conversation from "./components/Conversation";
// import { PullRequest, Comment, Commit, FileDiff } from "./types/github";
import CommitComponent from "./components/Commit";
import FileDiffComponent from "./components/FileDiff";
import {
  mockPullRequest,
  mockComments,
  mockCommits,
  mockFiles,
  mockReviews,
} from "./mockData/MockData";
import Review from "./components/Review";

const App: React.FC = () => {
  // const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<
    "conversation" | "commits" | "files"
  >("conversation");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">GitHub Pull Request</h1>
          {/* <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button> */}
        </div>

        <PullRequestHeader pr={mockPullRequest} />

        <PullRequestTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          counts={{
            conversation: mockPullRequest.comments,
            commits: mockPullRequest.commits,
            files: mockPullRequest.changed_files,
          }}
        />

        <div className="mt-6">
          {activeTab === "conversation" && (
            <div>
              <Conversation pr={mockPullRequest} comments={mockComments} />
              {mockReviews.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </div>
          )}
          {activeTab === "commits" && (
            <div className="border border-gray-200 dark:border-gray-700 rounded-md">
              {mockCommits.map((commit) => (
                <CommitComponent key={commit.sha} commit={commit} />
              ))}
            </div>
          )}
          {activeTab === "files" && (
            <div>
              <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      +{mockPullRequest.additions}
                    </span>
                    <span className="mx-2 text-gray-500">|</span>
                    <span className="text-red-600 dark:text-red-400 font-medium">
                      -{mockPullRequest.deletions}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {mockPullRequest.changed_files} files changed
                  </div>
                </div>
              </div>
              {mockFiles.map((file) => (
                <FileDiffComponent key={file.filename} file={file} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
