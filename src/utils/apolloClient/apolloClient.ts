import { useMemo } from 'react';
import { ApolloClient, HttpLink, from, InMemoryCache } from '@apollo/client';

let apolloClient: any;

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: 'https://beta.pokeapi.co/graphql/v1beta/',
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // set to true for SSR
    link: from([httpLink]),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState?: Object) {
  const newApolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = newApolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    newApolloClient.cache.restore({
      ...existingCache,
      ...(initialState || {}),
    });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return newApolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = newApolloClient;
  }

  return newApolloClient;
}

export function useApollo(initialState: Object) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
