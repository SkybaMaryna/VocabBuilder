import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 182px;

  @media ${devices.tablet} {
    width: 214px;
  }
`;

export const StyledIconLogo = styled.svg`
  width: 36px;
  height: 36px;

  @media ${devices.tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const StyledName = styled.p`
  color: var(--black);
  font-family: var(--FixelDisplay-SemiBold);
  font-size: 18px;
  line-height: calc(24 / 18);

  @media ${devices.tablet} {
    font-size: 22px;
    line-height: calc(32 / 22);
  }
`;
