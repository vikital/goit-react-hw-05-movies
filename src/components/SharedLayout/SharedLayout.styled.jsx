import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const HeaderNav = styled.nav`
  margin-left: 37px;
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;
export const NavLinkHeader = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: red;
  }
`;
