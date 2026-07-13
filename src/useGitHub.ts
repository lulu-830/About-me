import { useState, useEffect } from 'react';

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

export interface GithubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

const GITHUB_USERNAME = 'lulu-830';

const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;

async function fetchGitHub<T>(path: string): Promise<T> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json() as Promise<T>;
}

export function useGitHubUser() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHub<GithubUser>(`/users/${GITHUB_USERNAME}`)
      .then(setUser)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading, error };
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHub<GithubRepo[]>(
      `/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    )
      .then((all) => {
        const filtered = all
          .filter((r) => !r.fork && !r.archived)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        setRepos(filtered);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { repos, loading, error };
}
