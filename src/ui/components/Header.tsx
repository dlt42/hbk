import React, { FC } from 'react';

import Nav from './nav/Nav';

type HeaderProps = {
  title: string;
  children?: JSX.Element;
};

const Header: FC<HeaderProps> = ({ title, children }) => {
  document.title = title;

  return (
    <header className='z-10 flex w-full flex-row flex-wrap items-start justify-between gap-2 bg-[#fbefe7] p-2 shadow-[0_2px_10px_0_rgba(0,0,0,0.5)]'>
      <Nav />
      {children}
    </header>
  );
};

export default Header;
