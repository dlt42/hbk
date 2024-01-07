import React from 'react';
import { FC, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import NavContext from '../../context/nav/navContext';

const Nav: FC = (): JSX.Element => {
  const { links } = useContext(NavContext);
  const location = useLocation();
  return (
    <>
      <nav className='flex flex-row gap-3'>
        {links.map(({ to, label }, i): JSX.Element => {
          return (
            <Link
              key={`${i}_${to}`}
              className={`flex min-w-20 items-center justify-center rounded-[.5rem] border-[.1rem] border-solid border-slate-800 bg-white stroke-gray-800 font-bold ${
                to === location.pathname
                  ? 'cursor-default border-[.2rem]'
                  : 'cursor-pointer hover:border-[.2rem] hover:border-blue-600'
              }`}
              to={to}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
