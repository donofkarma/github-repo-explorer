import React from 'react';
import Link from 'next/link';

import { Repo } from 'types';

import * as St from './RepoItem.style';

type Props = Repo;

const RepoItem: React.FC<Props> = ({
  description,
  language,
  name,
  open_issues,
}) => {
  return (
    <St.Wrapper>
      <Link href={`/repos/${name}`} passHref>
        <a href="passHref">
          <h2>{name}</h2>

          <p>{description}</p>

          <St.RepoMeta>
            {language && <li>{language}</li>}
            {open_issues > 0 && <li>{open_issues} open issues</li>}
          </St.RepoMeta>
        </a>
      </Link>
    </St.Wrapper>
  );
};

export default RepoItem;
