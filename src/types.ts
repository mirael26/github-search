export interface Response {
  total_count: number,
  items: Array<{id: number,
    name: string,
    description: string,
    owner: {
      login: string
    },
    html_url: string}>
};

export interface Repo {
  id: number,
  name: string,
  description: string,
  user: string,
  url: string,
};

export type Repos = Array<Repo>;