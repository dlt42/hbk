import React, { FC } from 'react';

type PaginationButtonProps = {
  children: JSX.Element;
  page: number;
  current: number;
  total: number;
  setPage: (pageNumber: number) => void;
  rel?: string;
  type: 'page' | 'nav';
};

const PaginationButton: FC<PaginationButtonProps> = ({
  children,
  page,
  current,
  total,
  setPage,
  rel,
  type,
}): JSX.Element => {
  const enabled = page >= 0 && page < total && current !== page;
  return (
    <li
      className={` ${
        enabled ? 'cursor-pointer bg-white hover:border-blue-600  ' : 'cursor-default bg-gray-300'
      } ${
        type === 'nav' ? 'w-8 pt-[0.2rem] pb-[0.2rem]' : ' text-xs text-[.8rem]'
      } block rounded-[.2rem] border-[.1rem] border-solid border-slate-800  text-center `}
    >
      <a
        className={`${type === 'nav' ? 'flex justify-center' : 'pl-[0.2rem] pr-[0.2rem]'} ${
          enabled ? 'text-black' : 'text-gray-800'
        } block h-full w-full`}
        rel={rel}
        onClick={() => {
          if (enabled) setPage(page);
          return false;
        }}
      >
        {children}
      </a>
    </li>
  );
};

export default PaginationButton;
