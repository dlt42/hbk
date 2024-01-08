import { Context, createContext } from 'react';

export type NavLink = {
  label: string;
  to: string;
};

const NavLinkContext: Context<NavLink[]> = createContext<NavLink[]>([]);

export default NavLinkContext;
