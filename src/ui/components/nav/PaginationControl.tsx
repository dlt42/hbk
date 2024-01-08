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
  const endIndex = page * limit + limit > total ? total : page * limit + limit;
  const totalPages = Math.ceil(total / limit);

  const startPage = page - 3 < 0 ? 0 : page - 3;
  const endPage = startPage + 7 > totalPages ? totalPages : startPage + 7;
  const pageNumbers = [];
  for (let i = startPage; i < endPage; i++) pageNumbers.push(i);

  return (
    <nav className='flex w-full flex-col gap-2'>
      <span className='block text-center text-[.8rem] sm:hidden'>
        {startIndex} to {endIndex} of {total}
      </span>
      <ul className='flex flex-row justify-center gap-2'>
        <PaginationButton
          setPage={setPage}
          page={0}
          label='First'
          rel='first'
          current={page}
          total={totalPages}
          type='nav'
        />
        <PaginationButton
          setPage={setPage}
          page={page - 1}
          label='Prev'
          rel='prev'
          current={page}
          total={totalPages}
          type='nav'
        />
        <span className='hidden text-center text-[.8rem] sm:block'>
          {startIndex} to {endIndex} of {total}
        </span>
        <PaginationButton
          setPage={setPage}
          page={page + 1}
          label='Next'
          rel='next'
          current={page}
          total={totalPages}
          type='nav'
        />
        <PaginationButton
          setPage={setPage}
          page={totalPages - 1}
          label='Last'
          rel='last'
          current={page}
          total={totalPages}
          type='nav'
        />
      </ul>
      <ul className=' hidden flex-row justify-center gap-2 sm:flex'>
        {pageNumbers.map((pageNumber, index) => (
          <PaginationButton
            key={`page-${index}`}
            setPage={setPage}
            page={pageNumber}
            label={(pageNumber + 1).toString()}
            current={page}
            total={totalPages}
            type='page'
          />
        ))}
      </ul>
    </nav>
  );
};

export default PaginationControls;
