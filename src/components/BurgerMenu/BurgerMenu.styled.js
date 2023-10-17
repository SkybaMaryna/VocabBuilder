import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledDropdown = styled.div``;

export const StyledBurgerMenu = styled.div`
  width: 185px;
  height: 100vh;
  padding: 16px;
  background-color: var(--green);
  position: relative;

  @media ${devices.tablet} {
    width: 300px;
    padding: 20px 32px;
  }
`;

export const StyledIconClose = styled.svg`
  width: 32px;
  height: 32px;

  position: absolute;
  top: 16px;
  right: 16px;

  @media ${devices.tablet} {
    width: 40px;
    height: 40px;
    top: 20px;
    right: 32px;
  }
`;
