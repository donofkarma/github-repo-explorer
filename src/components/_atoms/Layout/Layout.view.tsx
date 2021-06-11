import React from 'react';
import Head from 'next/head';

import Header from 'components/Header';

import * as St from './Layout.style';

interface Props {
  pageTitle?: string;
}

const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <St.Wrapper>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge,chrome=1" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />

        <title>{pageTitle && `${pageTitle} - `}Github org explorer</title>

        <meta name="description" content="Explore Github repos" />
      </Head>

      <Header />

      <St.Main>{children}</St.Main>
    </St.Wrapper>
  );
};

export default Layout;
