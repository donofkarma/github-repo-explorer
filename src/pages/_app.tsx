import React from 'react';
import type { AppProps } from 'next/app';

import GlobalStyle from 'styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />

    <Component {...pageProps} />
  </>
);

export default App;
