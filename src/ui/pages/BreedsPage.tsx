import { Breed } from 'domain/breeds.types';
import React, { FC, useCallback, useState } from 'react';

import { getDisplayData } from '../../domain/breeds';
import BreedList from '../components/breeds/BreedsList';
import Filter from '../components/Filter';
import Header from '../components/Header';
import { useData } from '../context/dataContext';

const BreedsPage: FC = (): JSX.Element => {
  const data = useData();
  const [breeds, setBreeds] = useState(data.breeds);
  const onTermChange = useCallback(
    (term: string) => {
      const filtered = data.breeds.filter((breed) => {
        if (!term) {
          return true;
        }
        const anyValueMatched = Object.keys(breed).some((key) => {
          const displayData = getDisplayData(breed, key as keyof Breed);
          if (!displayData) {
            return false;
          }
          const { resultLabel, resultValue } = displayData;
          if (!resultValue) {
            return false;
          }

          const lowerTerm = term.toLowerCase();
          const lowerLabel = resultLabel.toLowerCase();
          const lowerValue = resultValue.toString().toLowerCase();

          if (lowerLabel === 'weight') {
            console.log(lowerValue); //7 - 10
          }

          const queryStart = `${lowerLabel}: `;
          const matchesQuery =
            lowerTerm.startsWith(queryStart) &&
            lowerValue.indexOf(lowerTerm.substring(queryStart.length)) > -1;
          const matchesValue = lowerValue.toString().indexOf(lowerTerm) > -1;
          return matchesQuery || matchesValue;
        });
        return anyValueMatched;
      });
      setBreeds(filtered);
    },
    [data]
  );
  return (
    <>
      <Header title='Breeds' />
      <div className='pt-20'>
        <Filter
          onTermChange={onTermChange}
          placeholder='Filter breeds...'
        ></Filter>
        <BreedList breeds={breeds}></BreedList>
      </div>
    </>
  );
};

export default BreedsPage;
