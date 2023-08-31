import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Header,
  Main,
  Nav,
  StyledLink,
  Link,
  Wrapper,
  Footer,
} from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <Link href="https://github.com/SakhnoDima">
          <AiFillGithub />
        </Link>
        <p>&copy; {new Date().getFullYear()} Movie Search </p>
      </Footer>
      <ToastContainer />
    </Wrapper>
  );
};

export default Layout;
