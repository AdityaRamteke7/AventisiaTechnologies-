import { PullRequest, Comment, Commit, FileDiff, Review, User } from '../types/github';

export const mockUser: User = {
  login: "shadcn",
  avatar_url: "https://avatars.githubusercontent.com/u/124599?v=4",
  html_url: "https://github.com/shadcn"
};

export const mockCollaborators: User[] = [
  {
    login: "taylorotwell",
    avatar_url: "https://avatars.githubusercontent.com/u/463230?v=4",
    html_url: "https://github.com/taylorotwell"
  },
  {
    login: "evanw",
    avatar_url: "https://avatars.githubusercontent.com/u/406394?v=4",
    html_url: "https://github.com/evanw"
  },
  {
    login: "sophiebits",
    avatar_url: "https://avatars.githubusercontent.com/u/6820?v=4",
    html_url: "https://github.com/sophiebits"
  }
];

export const mockPullRequest: PullRequest = {
  number: 6928,
  title: "feat: add new component library",
  user: mockUser,
  state: "open",
  created_at: "2023-04-15T10:00:00Z",
  updated_at: "2023-04-16T14:30:00Z",
  comments: 5,
  commits: 10,
  changed_files: 8,
  additions: 1245,
  deletions: 320,
  labels: [
    { name: "enhancement", color: "a2eeef" },
    { name: "ui", color: "fef2c0" }
  ],
  body: "This PR adds a new component library to the project. It includes:\n\n- Button components\n- Form controls\n- Modal dialogs\n- Typography components\n\nAll components are fully typed with TypeScript and support dark mode."
};

export const mockComments: Comment[] = [
  {
    id: 1,
    user: mockCollaborators[0],
    body: "This looks great! I especially like the modal component implementation.",
    created_at: "2023-04-15T11:30:00Z",
    updated_at: "2023-04-15T11:30:00Z",
    html_url: "https://github.com/shadcn/ui/pull/6928#issuecomment-1"
  },
  {
    id: 2,
    user: mockCollaborators[1],
    body: "Have you considered adding support for RTL languages?",
    created_at: "2023-04-15T12:45:00Z",
    updated_at: "2023-04-15T12:45:00Z",
    html_url: "https://github.com/shadcn/ui/pull/6928#issuecomment-2"
  }
];

export const mockCommits: Commit[] = [
  {
    sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
    message: "feat: add button component",
    author: mockUser,
    date: "2023-04-14T09:15:00Z",
    html_url: "https://github.com/shadcn/ui/commit/a1b2c3d"
  },
  {
    sha: "b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1",
    message: "fix: button hover state",
    author: mockUser,
    date: "2023-04-14T11:30:00Z",
    html_url: "https://github.com/shadcn/ui/commit/b2c3d4e"
  },
  {
    sha: "b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1",
    message: "fix: button hover state",
    author: mockUser,
    date: "2023-04-14T11:30:00Z",
    html_url: "https://github.com/shadcn/ui/commit/b2c3d4e"
  }
];

export const mockFiles: FileDiff[] = [
  {
    filename: "src/components/Button.tsx",
    changes: 45,
    additions: 45,
    deletions: 0,
    status: "added",
    patch: `+import React from 'react';\n+import { cva } from 'class-variance-authority';\n+\n+const buttonVariants = cva(\n+  'inline-flex items-center justify-center rounded-md text-sm font-medium',\n+  {\n+    variants: {\n+      variant: {\n+        default: 'bg-primary text-primary-foreground hover:bg-primary/90',\n+        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',\n+        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',\n+        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',\n+        ghost: 'hover:bg-accent hover:text-accent-foreground',\n+        link: 'text-primary underline-offset-4 hover:underline',\n+      },\n+    },\n+  }\n+);`
  },
  {
    filename: "src/components/Modal.tsx",
    changes: 120,
    additions: 120,
    deletions: 0,
    status: "added"
  }
];

export const mockReviews: Review[] = [
  {
    id: 1,
    user: mockCollaborators[2],
    state: "approved",
    body: "LGTM! The implementation is clean and follows our design system guidelines.",
    submitted_at: "2023-04-16T10:15:00Z",
    html_url: "https://github.com/shadcn/ui/pull/6928#pullrequestreview-1",
    comments: [
      {
        id: 101,
        body: "Maybe we should add a transition for the hover state?",
        path: "src/components/Button.tsx",
        line: 12,
        created_at: "2023-04-16T10:16:00Z"
      }
    ]
  },
  {
    id: 1,
    user: mockCollaborators[2],
    state: "changes_requested",
    body: "LGTM! The implementation is clean and follows our design system guidelines.",
    submitted_at: "2023-04-16T10:15:00Z",
    html_url: "https://github.com/shadcn/ui/pull/6928#pullrequestreview-1",
    comments: [
      {
        id: 101,
        body: "Maybe we should add a transition for the hover state?",
        path: "src/components/Button.tsx",
        line: 12,
        created_at: "2023-04-16T10:16:00Z"
      }
    ]
  }
];