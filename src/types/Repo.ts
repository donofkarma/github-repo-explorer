import { Org } from './Org';

type Repo = {
  created_at: string;
  description: string;
  html_url: string;
  forks_count: number;
  id: number;
  language: string;
  open_issues: number;
  owner: Org;
  name: string;
  private: boolean;
  stargazers_count: number;
  updated_at: string;
  watchers_count: number;
};

export type { Repo };
