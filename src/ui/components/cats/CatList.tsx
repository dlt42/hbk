import React, { FC } from 'react';

import { Cat, Cats } from '../../../domain/cats.types';
import { CatCard } from './CatCard';

type CatListProps = {
  cats: Cats;
};

const CatList: FC<CatListProps> = ({ cats }): JSX.Element => {
  return (
    <div className='flex flex-wrap justify-center gap-2 p-2 pt-4'>
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

export default CatList;
