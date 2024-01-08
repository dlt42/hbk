import React, { FC, useCallback, useEffect, useState } from 'react';

import { CatSearchParams, getCats } from '../../domain/cats';
import { Cats } from '../../domain/cats.types';
import BreedFilter, { ALL_BREEDS } from '../components/cats/BreedFilter';
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
    breed_ids: undefined,
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

  const setFilter = useCallback(
    (breed_id: string) => {
      setCatSearchParams({
        ...catSearchParams,
        breed_ids: breed_id === ALL_BREEDS ? undefined : [breed_id],
        page: 0,
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
      <Header title='Cats'>
        <div className='flex flex-row flex-wrap items-start justify-around gap-2 rounded-[.2rem] border-[.1rem] border-solid border-slate-800 bg-gray-200 p-[.3rem]'>
          <BreedFilter
            setFilter={setFilter}
            value={
              catSearchParams.breed_ids === undefined
                ? ALL_BREEDS
                : catSearchParams.breed_ids[0]
            }
          />
          <PaginationControls
            limit={limit}
            page={page}
            total={total}
            setPage={setPage}
          />
        </div>
      </Header>
      <div className='overflow-y-scroll'>
        <CatList cats={cats} />
      </div>
    </>
  );
};

export default CatsPage;
