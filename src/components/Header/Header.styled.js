import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  padding: 16px 16px;

  @media ${devices.tablet} {
    padding: 20px 32px;
  }

  @media ${devices.desktop} {
    padding: 20px 100px;
  }
`;

export const StyledIconBurger = styled.svg`
  stroke: var(--black);

  &:hover {
    stroke: var(--black-50);
  }

  @media ${devices.tablet} {
    width: 40px;
    height: 28px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${devices.tablet} {
    gap: 28px;
  }
`;
