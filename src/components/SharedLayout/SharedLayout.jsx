import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderNav, NavLinkHeader } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <HeaderNav>
          <NavLinkHeader to="/">Home</NavLinkHeader>
          <NavLinkHeader to="/movies">Movies</NavLinkHeader>
        </HeaderNav>
      </header>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
