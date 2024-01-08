import React, { useEffect, useState } from 'react';

const Filter = ({
  onTermChange,
  placeholder,
}: {
  placeholder: string;
  onTermChange: (value: string) => void;
}) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    onTermChange(term);
  }, [term, onTermChange]);
  return (
    <input
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
