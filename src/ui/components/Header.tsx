import React, { FC } from 'react';

import Nav from './nav/Nav';

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }): JSX.Element => {
  document.title = title;
  return (
    <header className='z-10 flex w-full items-center justify-between bg-[#fbefe7] p-3 shadow-[0_2px_10px_0_rgba(0,0,0,0.5)]'>
      <div className='text-4xl font-bold'>{title}</div>
      <Nav />
    </header>
  );
};

export default Header;
