import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 16px;
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  background: rgb(0, 5, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 5, 255, 0.6111038165266107) 0%,
    rgba(9, 9, 121, 1) 54%,
    rgba(2, 0, 36, 1) 100%
  );
`;
export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;
export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid black;
  cursor: pointer;

  &.active {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const Main = styled.main`
  flex: 1 1 auto;
  padding: 16px;
`;

export const Link = styled.a`
  display: block;
  width: 19px;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  height: 40px;
  text-align: center;
`;

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
