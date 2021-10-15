import Link from 'next/link';
import React from 'react';

import * as St from './Header.style';

const Header: React.FC = () => {
  return (
    <St.Wrapper>
      <Link href="/" passHref>
        <a href="passHref">PokeAPI explorer</a>
      </Link>
    </St.Wrapper>
  );
};

export default Header;
