import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const StyledCaption = styled.p`
  color: var(--black-80);
  text-align: center;
  font-family: var(--FixelDisplay);
  font-size: 14px;
  text-align: center;

  @media ${devices.desktop} {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;
