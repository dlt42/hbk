import React, { FC } from 'react';

import { Cat } from '../../../domain/cats';
import { CatCard } from './CatCard';

export type CatListProps = {
  cats: Cat[] | null;
};

export const CatList: FC<CatListProps> = ({ cats }): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-between p-2'>
      {cats === null ? (
        <div>No cats</div>
      ) : (
        cats.map((cat: Cat, index: number) => (
          <CatCard key={`${index}-${cat.id}`} cat={cat} />
        ))
      )}
    </div>
  );
};
