import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledStatistic = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 94px;
  height: 28px;

  font-weight: 500;
  line-height: normal;

  @media ${devices.tablet} {
    width: 103px;
    height: 30px;
  }
`;

export const StyledText = styled.span`
  color: var(--black-50);
  font-size: 14px;

  @media ${devices.tablet} {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const StyledCount = styled.span`
  color: var(--black);
  font-size: 20px;

  @media ${devices.tablet} {
    line-height: calc(30 / 20);
  }
`;
