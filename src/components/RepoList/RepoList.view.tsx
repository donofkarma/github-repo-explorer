import React from 'react';

import { Repo } from 'types';

import RepoItem from './RepoItem';
import * as St from './RepoList.style';

interface Props {
  repos: Repo[];
}

const RepoList: React.FC<Props> = ({ repos }) => {
  return (
    <St.Wrapper>
      {repos.map((repo: Repo) => (
        <RepoItem key={repo.id} {...repo} />
      ))}
    </St.Wrapper>
  );
};

export default RepoList;
