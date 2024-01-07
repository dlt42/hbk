import React, { FC } from 'react';

import { Cat } from '../../../domain/cats';

type CatProps = {
  cat: Cat;
};

export const CatCard: FC<CatProps> = ({ cat }): JSX.Element => {
  const { id } = cat;
  return (
    <article
      id={id}
      className={` m-2 flex w-full flex-grow cursor-pointer flex-row flex-nowrap items-start gap-3 rounded-[.5rem] border-[.1rem] border-solid border-slate-800 bg-white p-4`}
    >
      <span></span>
    </article>
  );
};
