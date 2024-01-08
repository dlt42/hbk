import React, { FC } from 'react';

import PaginationButton from './PaginationButton';

type PaginationControlsProps = {
  total: number;
  page: number;
  limit: number;
  setPage: (pageNumber: number) => void;
};

const PaginationControls: FC<PaginationControlsProps> = ({
  limit,
  page,
  total,
  setPage,
}): JSX.Element => {
  const startIndex = page * limit + 1;
  const possibleEndIndex = page * limit + limit;
  const endIndex = possibleEndIndex > total ? total : possibleEndIndex;
  const totalPages = Math.ceil(total / limit);
  const startPage = page - 3 < 0 ? 0 : page - 3;
  const endPage = startPage + 7 > totalPages ? totalPages : startPage + 7;
  const pageNumbers = [];
  for (let i = startPage; i < endPage; i++) pageNumbers.push(i);

  return (
    <nav className='flex  flex-col gap-2'>
      <ul className='flex flex-row items-center justify-center gap-2'>
        <PaginationButton
          setPage={setPage}
          page={0}
          rel='first'
          current={page}
          total={totalPages}
          type='nav'
          h-4
          w-4
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-4 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5'
            />
          </svg>
        </PaginationButton>
        <PaginationButton
          setPage={setPage}
          page={page - 1}
          rel='prev'
          current={page}
          total={totalPages}
          type='nav'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-4 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5 8.25 12l7.5-7.5'
            />
          </svg>
        </PaginationButton>
        <span className=' text-center text-[.8rem] '>
          {startIndex} to {endIndex} of {total}
        </span>
        <PaginationButton
          setPage={setPage}
          page={page + 1}
          rel='next'
          current={page}
          total={totalPages}
          type='nav'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-4 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m8.25 4.5 7.5 7.5-7.5 7.5'
            />
          </svg>
        </PaginationButton>
        <PaginationButton
          setPage={setPage}
          page={totalPages - 1}
          rel='last'
          current={page}
          total={totalPages}
          type='nav'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-4 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5'
            />
          </svg>
        </PaginationButton>
      </ul>
      <ul className=' hidden flex-row justify-center gap-2 sm:flex'>
        {pageNumbers.map((pageNumber, index) => (
          <PaginationButton
            key={`page-${index}`}
            setPage={setPage}
            page={pageNumber}
            current={page}
            total={totalPages}
            type='page'
          >
            <span>{(pageNumber + 1).toString()}</span>
          </PaginationButton>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationControls;
