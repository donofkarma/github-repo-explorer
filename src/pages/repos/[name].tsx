import React from 'react';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import Layout from 'components/_atoms/Layout';
import RepoDetail from 'components/RepoDetail';
import { RESULTS_PER_PAGE } from 'constants/app';
import { Repo } from 'types';
import fetcher from 'utils/fetcher';

interface Props {
  name: string;
  repo: Repo;
}

const RepoDetails: React.FC<Props> = ({ repo }) => {
  const router = useRouter();
  const { name } = router.query;
  const { data, error } = useSWR(`/api/repo/${name}`, fetcher, {
    initialData: repo,
  });
  const isInitialLoad = (!data && !error) || Object.keys(data).length === 0;

  if (isInitialLoad) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={data.name}>
      <RepoDetail {...data} />
    </Layout>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const results = await fetcher(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/repos?per_page=${RESULTS_PER_PAGE}&page=1`
  );

  // Get the paths we want to pre-render based on posts
  const paths = results.map((repo: Repo) => ({
    params: { name: repo.name },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const repo = await fetcher(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/repo/${params?.name}`
  );

  return {
    props: {
      name: params?.name,
      repo,
    },
    revalidate: 300,
  };
}

export default RepoDetails;
