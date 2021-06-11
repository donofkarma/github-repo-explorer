import React from 'react';
import Link from 'next/link';

import * as St from './Header.style';

const Header: React.FC = () => {
  return (
    <St.Wrapper>
      <Link href="/" passHref>
        <a href="passHref">Github org explorer</a>
      </Link>
    </St.Wrapper>
  );
};

export default Header;
