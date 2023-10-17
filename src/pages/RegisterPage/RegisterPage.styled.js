import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledLogoWrapper = styled.div`
  margin-top: 16px;
  margin-left: 16px;
  margin-bottom: 12px;

  @media ${devices.tablet} {
    margin-top: 24px;
    margin-left: 0px;
    margin-bottom: 144px;
  }
  @media ${devices.desktop} {
    margin-bottom: 64px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: ${props => (props.page === 'register' ? '8px' : '43px')};
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    gap: ${props => (props.page === 'register' ? '98px' : '172px')};
    padding-bottom: 106px;
  }
  @media ${devices.desktop} {
    gap: 80px;
    flex-direction: row-reverse;
    justify-content: start;
    padding-bottom: 80px;
  }

  /* background-image: linear-gradient(
    287deg,
    rgba(133, 170, 159, 0.51) 23.19%,
    rgba(255, 255, 255, 0) 60.01%
  );
  background-size: 693px 597px;
  background-repeat: no-repeat;
  background-position: right -100px ; */
`;

export const StyledImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledImg = styled.img``;

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
