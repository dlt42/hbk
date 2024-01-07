import React from 'react';
import { HashRouter } from 'react-router-dom';

import ErrorBoundary from './ui/components/ErrorBoundary';
import { DataProvider } from './ui/context/dataProvider';
import { NavData } from './ui/context/nav/navContext';
import NavProvider from './ui/context/nav/navProvider';
import { useError } from './ui/hooks/useError';
import BreedsPage from './ui/pages/BreedsPage';
import CatsPage from './ui/pages/CatsPage';
import NotFoundPage from './ui/pages/NotFoundPage';

const AppComponent = () => {
  const navData: NavData = {
    links: [
      { to: '/', label: 'Cats' },
      { to: '/Breeds', label: 'Breeds' },
    ],
    routes: [
      { path: '/', element: <CatsPage /> },
      { path: '/Breeds', element: <BreedsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  };
  return (
    <HashRouter>
      <div className='flex h-full max-h-screen  w-full min-w-96 max-w-full flex-col overflow-y-hidden'>
        <NavProvider navData={navData} />
      </div>
    </HashRouter>
  );
};

export const App = () => {
  const { handleError } = useError();
  return (
    <ErrorBoundary
      handleError={handleError}
      currentError={null}
      boundaryLocation='AppWrapper'
      throwUnhandled={false}
    >
      <DataProvider>
        <AppComponent />
      </DataProvider>
    </ErrorBoundary>
  );
};

export default App;
