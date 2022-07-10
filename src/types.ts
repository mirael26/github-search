export interface Response {
  total_count: number,
  items: Array<{id: number,
    name: string,
    private: boolean,
    owner: {
      login: string
    },
    html_url: string}>
};

export interface Repo {
  id: number,
  name: string,
  private: boolean,
  user: string,
  url: string,
};

export type Repos = Array<Repo>;