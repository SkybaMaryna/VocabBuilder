import { devices } from 'constants/breakpoints';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media ${devices.desktop} {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--white);
  font-family: MacPaw Fixel Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: inherit;
  font-size: 14px;
  line-height: normal;
  transition: color var(--slow-transform),
    background-color var(--slow-transform);

  &.active {
    width: 110px;
    height: 43px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--white);
    color: var(--black);
  }


  @media ${devices.desktop} {
    color: var(--black);

    &.active {
      width: 110px;
      height: 43px;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--green);
      color: var(--white);
    }
  }
`;
