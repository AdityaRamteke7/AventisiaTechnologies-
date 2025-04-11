// import React from "react";
// import Avatar from "../components/Avatar";
import { Review as ReviewType } from "../types/github";
import TimelineItem from "./TimelineItem";

interface ReviewProps {
  review: ReviewType;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  const stateColor = {
    approved:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    changes_requested:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    commented: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  };

  return (
    <TimelineItem type="review" user={review.user} date={review.submitted_at}>
      <div className="border border-gray-200 dark:border-gray-700 rounded-md">
        <div
          className={`px-4 py-2 border-b border-gray-200 dark:border-gray-700 rounded-t-md flex justify-between items-center ${
            stateColor[review.state]
          }`}
        >
          <div className="flex items-center">
            <span className="font-medium">
              {review.state === "approved"
                ? "Approved"
                : review.state === "changes_requested"
                ? "Changes requested"
                : "Reviewed"}
            </span>
          </div>
          <div className="text-sm">
            {new Date(review.submitted_at).toLocaleString()}
          </div>
        </div>
        <div className="p-4">
          {review.body && (
            <div className="mb-4 text-gray-800 dark:text-gray-200">
              {review.body}
            </div>
          )}
          {review.comments && review.comments.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h4 className="font-medium mb-2">Review comments</h4>
              {review.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="mb-3 last:mb-0 pl-4 border-l-2 border-gray-200 dark:border-gray-700"
                >
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    On {comment.path} at line {comment.line}
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    {comment.body}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </TimelineItem>
  );
};

export default Review;
