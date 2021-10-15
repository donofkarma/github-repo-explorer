import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import React from 'react';

import { useApollo } from '@lib/apolloClient';
import GlobalStyle from '@styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
