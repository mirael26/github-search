import * as React from "react";
import { useState } from "react";

import { Repos, Response } from "../../types";

import Results from "../results/results";

const RESULT_COUNT = 10;

const Search = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [repos, setRepos] = useState<Repos>(null);
  const [totalCount, setTotalCount] = useState(null);
  const [isError, setError] = useState(false);

  const getRepos = async () => {
    return await fetch(`https://api.github.com/search/repositories?q=${inputValue}&per_page=${RESULT_COUNT}`)
      .then(response => {
        if (response.ok) {
          response.json()
          .then(data => convertResults(data));
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      })
  };

  const convertResults = (response: Response) => {
    const resultItems = response.items.map((item) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        user: item.owner.login,
        url: item.html_url,
      }
    });
    setRepos(resultItems);
    setTotalCount(response.total_count);
  };
  
  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };
  
  const onFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    setError(false);
    if (inputValue) {
      getRepos();
    }
  };

  return (
    <div className="search">
      <h1 className="search__title">Поиск репозиториев на Github</h1>
      <form className="search__form" onSubmit={onFormSubmit}>
        <input className="search__input" type="text" placeholder="Введите текст" value={inputValue} onChange={onInputChange}/>
        <button className="search__search-button" type="submit">Найти</button>
      </form>

      {repos?.length ? <Results repos={repos} /> : null}
    </div>
  )
}

export default Search;