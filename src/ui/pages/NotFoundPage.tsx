import React, { FC } from 'react';

import Header from '../components/Header';

const NotFoundPage: FC = () => (
  <>
    <header>
      <Header title='Not Found' />
    </header>
    <main>
      <section className='p-3 text-center'>
        <span>404: Page Not Found!</span>
      </section>
    </main>
  </>
);

export default NotFoundPage;
