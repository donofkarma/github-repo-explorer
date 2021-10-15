import { useQuery } from '@apollo/client';

import Layout from '@components/_atoms/Layout';
import { GetPokemonList } from '@graphql/generated/GetPokemonList';
import { GET_POKEMON_LIST } from '@graphql/queries';
import { initializeApollo } from '@lib/apolloClient';

const Home: React.FC = () => {
  const { data, error, loading } = useQuery<GetPokemonList>(GET_POKEMON_LIST);

  console.log({ data, error, loading });

  return (
    <Layout>
      <h1>PokeAPI Explorer</h1>
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query<GetPokemonList>({
    query: GET_POKEMON_LIST,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 60,
  };
}

export default Home;
