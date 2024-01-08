import React, { FC, useCallback, useEffect, useState } from 'react';

import { CatSearchParams, getCats } from '../../domain/cats';
import { Cats } from '../../domain/cats.types';
import CatList from '../components/cats/CatList';
import Header from '../components/Header';
import PaginationControls from '../components/nav/PaginationControl';
import { useThrowAsyncError } from '../hooks/useThrowAsyncError';

const CatsPage: FC = (): JSX.Element => {
  const throwError = useThrowAsyncError();
  const [total, setTotal] = useState(0);
  const [catSearchParams, setCatSearchParams] = useState<CatSearchParams>({
    limit: 24,
    order: 'ASC',
    page: 0,
    size: 'small',
  });
  const [cats, setCats] = useState<Cats>([] as Cats);

  const setPage = useCallback(
    (page: number) => {
      setCatSearchParams({
        ...catSearchParams,
        page,
      });
    },
    [catSearchParams]
  );

  useEffect(() => {
    const request = async () => {
      const result = await getCats(catSearchParams);

      console.log(JSON.stringify(result));
      if (result.isErr) {
        throwError(result.error);
      } else {
        const {
          value: { data, headers },
        } = result;
        const count = headers['Pagination-Count'];
        if (count) {
          setTotal(count);
        }
        setCats(data);
      }
    };
    request();
  }, [catSearchParams, throwError]);
  const { limit, page } = catSearchParams;

  return (
    <>
      <Header title='Cats' />
      <div className='m-3 flex flex-col items-center justify-around gap-3'>
        <PaginationControls
          limit={limit}
          page={page}
          total={total}
          setPage={setPage}
        />
      </div>
      <div className='overflow-y-scroll'>
        <CatList cats={cats} />
      </div>
    </>
  );
};

export default CatsPage;
