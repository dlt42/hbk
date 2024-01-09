import React, { FC, useEffect, useState } from 'react';

type FilterProps = {
  placeholder: string;
  onTermChange: (value: string) => void;
};

const Filter: FC<FilterProps> = ({ onTermChange, placeholder }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    onTermChange(term);
  }, [term, onTermChange]);

  return (
    <input
      id='filter-breeds'
      className='rounded-[.2rem] border-[.1rem] border-solid border-slate-800 pl-[.3rem]'
      placeholder={placeholder}
      type='text'
      value={term}
      onChange={(e) => {
        setTerm(e.target.value);
      }}
    />
  );
};

export default Filter;
