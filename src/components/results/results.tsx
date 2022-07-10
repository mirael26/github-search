import * as React from "react";
import { Repos } from "../../types";

interface ResultsProps {
  repos: Repos,
}

const Results = ({ repos }: ResultsProps): JSX.Element => {
  
  return (
    <div className="results">
      <div className="results__headers">
        <div className="results__name"> Название </div>
        <div className="results__autor"> Автор </div>
        <div className="results__description"> Описание </div>
      </div>

      {repos.map((repo, i) => {
        return <div key={i} className="results__row">
            <div className="results__name"><a className="results__name-link" href={repo.url} target="_blank" > {repo.name} </a></div>
            <div className="results__autor"> {repo.user} </div>
            <div className="results__description"> {repo.description} </div>
          </div>
      })}
    </div>
  );
};

export default Results;