import React, { FC } from 'react';

import { useData } from '../../context/dataContext';

export const ALL_BREEDS = '-';

type BreedFilterProps = {
  value: string;
  setFilter: (breed_id: string) => void;
};

const BreedFilter: FC<BreedFilterProps> = ({ value, setFilter }) => {
  const data = useData();

  return (
    <select
      id='select-breed'
      className='rounded-[.2rem] border-[.1rem] border-solid border-slate-800 pb-[0.075rem] pt-[0.075rem]'
      value={value}
      onChange={(e) => {
        setFilter(e.target.value);
      }}
    >
      <option value={ALL_BREEDS}>All breeds</option>
      {data.breeds.map((breed, index) => {
        return (
          <option key={`${breed.id}-${index}`} value={breed.id}>
            {breed.name}
          </option>
        );
      })}
    </select>
  );
};

export default BreedFilter;
