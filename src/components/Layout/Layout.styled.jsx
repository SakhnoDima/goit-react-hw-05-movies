import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 16px;
  height: 40px;
  display: flex;
  align-items: center;
`;
export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;
export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
