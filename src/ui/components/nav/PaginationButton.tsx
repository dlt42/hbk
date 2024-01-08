import React, { FC } from 'react';

type PaginationButtonProps = {
  label: string;
  page: number;
  current: number;
  total: number;
  setPage: (pageNumber: number) => void;
  rel?: string;
  type: 'page' | 'nav';
};

const PaginationButton: FC<PaginationButtonProps> = ({
  label,
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
        enabled ? 'cursor-pointer bg-white' : 'cursor-default bg-gray-300'
      } ${
        type === 'nav' ? 'w-20 ' : ' text-xs text-[.8rem]'
      } block rounded-[.2rem] border-[.1rem] border-solid border-slate-800 bg-white text-center `}
    >
      <a
        className={`${type === 'nav' ? 'pl-[0.4rem] pr-[0.4rem]' : 'pl-[0.2rem] pr-[0.2rem]'} ${
          enabled ? 'text-black' : 'text-gray-800'
        } block h-full w-full`}
        rel={rel}
        onClick={() => {
          if (enabled) setPage(page);
          return false;
        }}
      >
        {label}
      </a>
    </li>
  );
};

export default PaginationButton;
