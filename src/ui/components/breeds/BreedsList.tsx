import { Breed, Breeds } from 'domain/breeds.types';
import React, { FC } from 'react';

import BreedCard from './BreedCard';

type BreedListProps = {
  breeds: Breeds;
};

const BreedList: FC<BreedListProps> = ({ breeds }): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center p-2 align-middle'>
      {breeds === null ? (
        <div>No breed data loaded</div>
      ) : (
        breeds.map((breed: Breed, index: number) => (
          <BreedCard key={`${index}-${breed.id}`} breed={breed} />
        ))
      )}
    </div>
  );
};

export default BreedList;
