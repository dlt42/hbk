// import { TheCatAPI } from '@thatapicompany/thecatapi';
// const theCatAPI = new TheCatAPI(config.xApiKey);

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
    <div className='flex items-center justify-center align-middle'>
      <input
        className='m-1 border-[.1rem] border-solid border-gray-800 p-1'
        placeholder={placeholder}
        type='text'
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
    </div>
  );
};

export default Filter;
