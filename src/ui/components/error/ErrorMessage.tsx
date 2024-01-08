import React, { FC } from 'react';

import { getErrorMessage } from '../../../api/error';

type ErrorMessageProps = { error: Error };

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => (
  <div className='m-5 text-center'>
    <h3 style={{ marginBlockStart: '10px' }}>An error has occured</h3>
    <p style={{ wordBreak: 'break-word' }}>{getErrorMessage(error)}</p>
  </div>
);

export default ErrorMessage;
