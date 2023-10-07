import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledLogoWrapper = styled.div`
  margin-top: 16px;
  margin-left: 16px;
  margin-bottom: 12px;

  @media ${devices.tablet} {
    margin-top: 24px;
    margin-left: 32px;
    margin-bottom: 144px;
  }
  @media ${devices.desktop} {
    margin-top: 24px;
    margin-left: 100px;
    margin-bottom: 64px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 98px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 106px;

  @media ${devices.desktop} {
    gap: 80px;
    flex-direction: row-reverse;
    justify-content: center;
    padding-bottom: 80px;
  }
`;

export const StyledImgWrapper = styled.div`
`

export const StyledImg = styled.img`
  margin-bottom: 8px;

  @media ${devices.desktop} {
    margin-bottom: 16px;
  }
`;
