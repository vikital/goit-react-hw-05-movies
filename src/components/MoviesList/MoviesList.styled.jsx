import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const NavSearch = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
  margin-top: 20px;
`;
export const SearchMoviesNavLink = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: green;
  }
`;
