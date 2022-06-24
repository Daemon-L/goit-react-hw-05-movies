import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 12px 12px 0 12px;
  /* border: 1px solid black; */
`;

export const Nav = styled.nav`
    display: flex;
    margin-bottom: 24px;
    border-bottom: 2px solid #444
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  padding: 12px;
  color:#444;
  
  &.active {
    color: blue;
  }
`;