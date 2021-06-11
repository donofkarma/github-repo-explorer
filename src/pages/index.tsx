import React from 'react';
import { useSWRInfinite } from 'swr';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import RepoList from 'components/RepoList';
import { RESULTS_PER_PAGE } from 'constants/app';
import { ActionRow } from 'styles/utils';
import { Repo } from 'types';
import fetcher from 'utils/fetcher';

interface Props {
  results: Repo[];
}

const Home: React.FC<Props> = ({ results }) => {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `/api/repos?per_page=${RESULTS_PER_PAGE}&page=${index + 1}`,
    fetcher,
    {
      initialData: results,
    }
  );
  const repos = data ? [].concat(...data) : [];
  const isLoadingMore =
    size > 0 && data && typeof data[size - 1] === 'undefined';

  return (
    <Layout>
      <h1>Explore the Github org repos</h1>

      {error ? <p>Oops, something broke!</p> : <RepoList repos={repos} />}

      <ActionRow>
        <Button
          disabled={isLoadingMore}
          type="button"
          variant="primary"
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore ? 'Loading' : 'Load more'}
        </Button>
      </ActionRow>
    </Layout>
  );
};

export async function getStaticProps() {
  const results = await fetcher(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/repos?per_page=${RESULTS_PER_PAGE}&page=1`
  );

  return {
    props: {
      results,
    },
    revalidate: 300,
  };
}

export default Home;
