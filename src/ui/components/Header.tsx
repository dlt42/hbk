import React, { FC } from 'react';

import Nav from './nav/Nav';

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }): JSX.Element => {
  document.title = title;
  return (
    <header className='fixed flex h-16 w-full items-center justify-between bg-[#fbefe7] pl-3 pr-3 shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]'>
      <div className='text-4xl font-bold'>{title}</div>
      <Nav />
    </header>
  );
};

export default Header;
