import React, { FC } from 'react';

import { Cat } from '../../../domain/cats.types';

type CatProps = {
  cat: Cat;
};

export const CatCard: FC<CatProps> = ({ cat: { id, url } }) => (
  <article
    id={id}
    className={`flex cursor-pointer flex-row flex-nowrap items-start gap-2 rounded-[1rem] border-[.1rem] border-solid border-slate-400 bg-white p-2`}
  >
    <img
      className='h-64 w-64 rounded-[.6rem] border-[.1rem] border-solid border-slate-500 object-cover'
      src={url}
    />
  </article>
);
