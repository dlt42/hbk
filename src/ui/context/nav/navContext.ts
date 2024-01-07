import { Context, createContext } from 'react';
import { ToArrayStrict } from 'support/global.types';
import { NavRouteProps } from 'ui/components/nav/NavRoutes';

type NavLinkProps = {
  label: string;
  to: string;
};

export type NavLinkArray = ToArrayStrict<NavLinkProps>;

type NavRouteArray = ToArrayStrict<NavRouteProps>;

export type NavData = {
  links: NavLinkArray;
  routes: NavRouteArray;
};

const NavContext: Context<NavData> = createContext<NavData>({
  links: [],
  routes: [],
});

export default NavContext;
