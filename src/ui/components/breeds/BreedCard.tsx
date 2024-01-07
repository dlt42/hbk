import { Breed } from 'domain/breeds.types';
import React, { FC } from 'react';

import BreedDetails from './BreedDetails';

type BreedCardProps = {
  breed: Breed;
};

const BreedCard: FC<BreedCardProps> = ({ breed }): JSX.Element => {
  return (
    <article
      className={`m-2 flex w-full flex-grow flex-col flex-nowrap items-start  gap-3 rounded-[.5rem] border-[.1rem] border-solid border-slate-800 bg-white p-4`}
    >
      <section
        className={`flex w-full flex-grow flex-row flex-nowrap items-start  gap-3 `}
      >
        <span className='flex flex-col'>
          <h1 className='w-full text-left text-base font-bold'>{breed.name}</h1>
          <div className='text-left text-base'>{breed.description}</div>
        </span>
        {breed.image && (
          <span>
            <img
              className={`${'profile-view'} aspect-square h-32 min-w-[8rem] rounded-[4rem] border-[.1rem] border-solid border-slate-500 object-cover`}
              src={`${breed.image?.url}`}
            />
          </span>
        )}
      </section>
      <BreedDetails breed={breed} />
    </article>
  );
};

export default BreedCard;
