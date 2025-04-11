export interface User {
    login: string;
    avatar_url: string;
    html_url: string;
}

export interface Label {
    name: string;
    color: string;
}

export interface PullRequest {
    number: number;
    title: string;
    user: User;
    state: 'open' | 'closed' | 'merged';
    created_at: string;
    updated_at: string;
    comments: number;
    commits: number;
    changed_files: number;
    additions: number;
    deletions: number;
    labels: Label[];
    body: string;
}

export interface Comment {
    id: number;
    user: User;
    body: string;
    created_at: string;
    updated_at: string;
    html_url: string;
}

export interface Commit {
    sha: string;
    message: string;
    author: User;
    date: string;
    html_url: string;
}

export interface FileDiff {
    filename: string;
    changes: number;
    additions: number;
    deletions: number;
    status: 'modified' | 'added' | 'removed';
    patch?: string;
}

export interface ReviewComment {
    id: number;
    body: string;
    path: string;
    line: number;
    created_at: string;
}

export interface Review {
    id: number;
    user: User;
    state: 'approved' | 'changes_requested' | 'commented';
    body: string;
    submitted_at: string;
    html_url: string;
    comments: ReviewComment[];
}