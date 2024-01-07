import React, { FC } from 'react';

import { getDisplayData } from '../../../domain/breeds';
import { Breed } from '../../../domain/breeds.types';
import Details, { DetailsContent } from '../Details';

type BreedDetailsProps = {
  breed: Breed;
};

const BreedDetails: FC<BreedDetailsProps> = ({ breed }): JSX.Element => {
  const keys = Object.keys(breed);

  const detailsContent = keys.reduce(
    (result: DetailsContent, key: string) => {
      const displayData = getDisplayData(breed, key as keyof Breed);
      if (!displayData) {
        return result;
      }
      const { resultLabel, resultValue, resultTarget } = displayData;
      if (resultTarget !== null && resultValue !== null) {
        if (typeof resultValue === 'number' && resultTarget === 'stats') {
          const target = result[resultTarget];
          target.push([resultLabel, resultValue]);
        }
        if (typeof resultValue === 'string' && resultTarget !== 'stats') {
          const target = result[resultTarget];
          target.push([resultLabel, resultValue]);
        }
      }
      return result;
    },
    { stats: [], info: [], attributes: [], links: [] }
  );

  return <Details label='Details' content={detailsContent} id={breed.id} />;
};

export default BreedDetails;
