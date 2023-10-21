import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledDropdown = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
`;

export const StyledBurgerMenu = styled.div`
  width: 185px;
  height: 100vh;
  padding: 16px;
  background-color: var(--green);
  position: absolute;
  right: 0;
  transform: ${props =>
    props.$isopenmenu === 'true' ? 'translateX(0px)' : 'translateX(100%)'};
  transition: transform 3s;

  @media ${devices.tablet} {
    width: 300px;
    padding: 20px 32px;
  }
`;

export const StyledIconClose = styled.svg`
  width: 32px;
  height: 32px;
  cursor: pointer;

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

export const StyledImgWrapper = styled.div`
  width: 185px;
  margin-top: 139px;
  position: absolute;
  left: 0;

  @media ${devices.tablet} {
    width: 300px;

    margin-top: 214px;
  }
`;
