import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 16px;
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
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
  padding: 16px;
`;
