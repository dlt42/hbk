import React, { FC, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavContext from '../../context/nav/navContext';

export type NavRouteProps = {
  path: string;
  element: JSX.Element;
};

const NavRoutes: FC = (): JSX.Element => {
  const { routes } = useContext(NavContext);
  return (
    <Routes>
      {routes.map(
        ({ path, element }: NavRouteProps, i: number): JSX.Element => (
          <Route key={`${i}_${path}`} path={path} element={element} />
        )
      )}
    </Routes>
  );
};

export default NavRoutes;
