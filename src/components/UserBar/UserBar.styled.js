import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledUserBar = styled.div`
  width: 83px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: ${props => (props.page === 'menu' ? '166px' : '0px')};

  @media ${devices.tablet} {
    width: 113px;
    gap: 16px;
    margin-bottom: ${props => (props.page === 'menu' ? '170px' : '0px')};
  }
`;

export const StyledName = styled.p`
  color: ${props => (props.page === 'menu' ? 'var(--white)' : 'var(--black)')};
  font-family: var(--FixelDisplay-Medium);
  font-size: 16px;
  line-height: calc(24 / 16);

  @media ${devices.tablet} {
    font-size: 20px;
    line-height: normal;
  }
`;

export const StyledUserImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--FixelDisplay-Bold);
  font-size: 20px;
  line-height: calc(24 / 20);
  color: ${props => (props.page === 'menu' ? 'var(--green)' : 'var(--white)')};

  background-color: ${props =>
    props.page === 'menu' ? 'var(--white)' : 'var(--green)'};

  @media ${devices.tablet} {
    width: 48px;
    height: 48px;
    font-size: 25px;
  }
`;
