import React from 'react';

import NavRoutes from '../../components/nav/NavRoutes';
import NavContext, { NavData } from './navContext';

const NavProvider = ({ navData }: { navData: NavData }) => (
  <NavContext.Provider value={navData}>
    <NavRoutes />
  </NavContext.Provider>
);

export default NavProvider;
