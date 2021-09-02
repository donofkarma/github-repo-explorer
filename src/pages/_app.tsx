import React from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import GlobalStyle from 'styles/GlobalStyle';
import { useApollo } from 'utils/apolloClient';

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
