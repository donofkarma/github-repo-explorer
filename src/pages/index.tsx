import React from 'react';
import { gql, useQuery } from '@apollo/client';

import Layout from 'components/_atoms/Layout';
import { initializeApollo } from 'utils/apolloClient';

const query = gql`
  query Pokemon {
    pokemon_v2_pokemon(limit: 10) {
      name
    }
  }
`;

const Home: React.FC = () => {
  // const { data, error, loading } = useQuery(query);
  const { data, error, loading } = useQuery(query);

  console.log({ data, error, loading });

  return (
    <Layout>
      <h1>PokeAPI Explorer</h1>
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 60,
  };
}

export default Home;
