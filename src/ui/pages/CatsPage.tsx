import React, { FC, useEffect, useState } from 'react';

import { Cats } from '../../domain/cats.js';
import { CatList } from '../components/cats/CatList.js';
import Header from '../components/Header.js';

const CatsPage: FC = (): JSX.Element => {
  const [cats, setCats] = useState<Cats | null>(null);

  useEffect(() => {
    const request = async () => {};
    request();
  }, [setCats]);
  return (
    <>
      <Header title='Cats' />
      <div className='pt-20'>
        <CatList cats={cats} />
      </div>
    </>
  );
};

export default CatsPage;
