import styled from 'styled-components';
import { devices } from 'constants';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 0px 16px;
  margin: 0 auto;

  @media ${devices.tablet} {
    max-width: 768px;
    padding: 0px 32px;
  }

  @media ${devices.desktop} {
    max-width: 1440px;
    padding: 0px 100px;
  }
`;