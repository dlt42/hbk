import React, { FC } from 'react';

import { Cat } from '../../../domain/cats.types';

type CatProps = {
  cat: Cat;
};

export const CatCard: FC<CatProps> = ({ cat }): JSX.Element => {
  const { id, url } = cat;
  return (
    <article
      id={id}
      className={`flex cursor-pointer flex-row flex-nowrap items-start gap-3 rounded-[1rem] border-[.1rem] border-solid border-slate-200 bg-white p-2`}
    >
      <img
        className=' h-64 w-64 rounded-[.6rem] border-[.1rem] border-solid border-slate-200 object-cover'
        src={url}
      />
    </article>
  );
};
