import React from "react";
import { FileDiff } from "../types/github";

interface FileDiffProps {
  file: FileDiff;
}

const FileDiffComponent: React.FC<FileDiffProps> = ({ file }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-md mb-4">
      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700 rounded-t-md flex justify-between items-center">
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          {file.filename}
        </div>
        <div className="flex space-x-4">
          <span className="text-sm text-green-600 dark:text-green-400">
            +{file.additions}
          </span>
          <span className="text-sm text-red-600 dark:text-red-400">
            -{file.deletions}
          </span>
        </div>
      </div>
      <div className="p-4 bg-white dark:bg-gray-900">
        {file.patch ? (
          <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
            {file.patch}
          </pre>
        ) : (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {file.status === "added"
              ? "File added"
              : file.status === "removed"
              ? "File removed"
              : "File modified"}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileDiffComponent;
