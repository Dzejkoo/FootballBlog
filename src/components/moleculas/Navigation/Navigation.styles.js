import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  margin: 40px auto 10px auto;
  display: flex;
`;

export const StyledLink = styled(NavLink).attrs()`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 10px;
  &.active {
    background-color: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.backgroundColor};
    transition: 0.3s ease-in-out;
    box-shadow: 0px 3px 5px 0px rgba(66, 68, 90, 0.4);
  }
`;
