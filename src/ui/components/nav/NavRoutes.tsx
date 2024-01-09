import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

export type NavRoute = {
  path: string;
  element: JSX.Element;
};

type NavRoutesProps = {
  routes: NavRoute[];
};

const NavRoutes: FC<NavRoutesProps> = ({ routes }) => (
  <Routes>
    {routes.map(({ path, element }: NavRoute, i: number) => (
      <Route key={`${i}_${path}`} path={path} element={element} />
    ))}
  </Routes>
);

export default NavRoutes;
