import React from 'react';
import { StyledLink } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <section>
        <header>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/products">Products</StyledLink>
          </nav>
        </header>
      </section>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
