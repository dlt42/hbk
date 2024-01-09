import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './ui/components/error/ErrorBoundary';
import NavRoutes, { NavRoute } from './ui/components/nav/NavRoutes';
import { DataProvider } from './ui/context/dataProvider';
import NavContext, { NavLink } from './ui/context/navLinkContext';
import BreedsPage from './ui/pages/BreedsPage';
import CatsPage from './ui/pages/CatsPage';
import NotFoundPage from './ui/pages/NotFoundPage';

export const App = () => {
  const navLinks: NavLink[] = [
    { to: '/', label: 'Cats' },
    { to: '/Breeds', label: 'Breeds' },
  ];

  const navRoutes: NavRoute[] = [
    { path: '/', element: <CatsPage /> },
    { path: '/Breeds', element: <BreedsPage /> },
    { path: '*', element: <NotFoundPage /> },
  ];

  return (
    <ErrorBoundary currentError={null}>
      <DataProvider>
        <BrowserRouter>
          <div className='fixed flex h-[100%]  w-full min-w-80 max-w-full flex-col overflow-y-hidden'>
            <NavContext.Provider value={navLinks}>
              <NavRoutes routes={navRoutes} />
            </NavContext.Provider>
          </div>
        </BrowserRouter>
      </DataProvider>
    </ErrorBoundary>
  );
};

export default App;
