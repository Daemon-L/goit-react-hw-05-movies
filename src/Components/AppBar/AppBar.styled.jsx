import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 12px;
  border: 1px solid black;
    
`;

export const Nav = styled.nav`
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
    border: 1px solid red;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color:#444;
  
  &.active {
    color: blue;
  }
`;