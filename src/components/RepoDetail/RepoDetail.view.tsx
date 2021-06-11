import React from 'react';

import { Repo } from 'types';

import * as St from './RepoDetail.style';

type Props = Repo;

const RepoDetail: React.FC<Props> = ({
  description,
  html_url,
  forks_count,
  language,
  open_issues,
  name,
  stargazers_count,
  updated_at,
  watchers_count,
}) => {
  return (
    <St.Wrapper>
      <h1>{name}</h1>
      <p>
        {language && `${language} | `}
        {updated_at}
      </p>

      <p>{description}</p>

      <St.RepoMeta>
        <li>{open_issues} open issues</li>
        <li>{stargazers_count} stars</li>
        <li>{watchers_count} watchers</li>
        <li>{forks_count} forks</li>
      </St.RepoMeta>

      <p>
        <a href={html_url} rel="noreferrer noopener" target="_blank">
          View in Github
        </a>
      </p>
    </St.Wrapper>
  );
};

export default RepoDetail;
