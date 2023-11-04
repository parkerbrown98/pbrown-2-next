const GITHUB_URL = "https://api.github.com";
const PROFILE_ID = "parkerbrown98";
const PROFILE_URL = `${GITHUB_URL}/users/${PROFILE_ID}`;

type GithubProfile = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
};

export async function getProfile() {
  const response = await fetch(PROFILE_URL);
  return response.json() as Promise<GithubProfile>;
}

type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
  default_branch: string;
};

export async function getPublicRepos() {
  const response = await fetch(`${PROFILE_URL}/repos`);
  return response.json() as Promise<GithubRepo[]>;
}
