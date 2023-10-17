import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 375px;
  padding: ${props => (props.page === 'auth' ? '0px' : '0px 16px')};
  margin: 0 auto;

  @media ${devices.tablet} {
    max-width: 768px;
    padding: ${props => (props.page === 'auth' ? '0px 70px' : '0px 32px')};
  }

  @media ${devices.desktop} {
    max-width: 1440px;
    padding: 0px 100px;
  }
`;
