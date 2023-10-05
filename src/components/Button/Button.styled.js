import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 30px;
  background-color: ${props => {
    switch (props.$variant) {
      case 'wow':
      case 'gog':
        return 'transparent';
      case 'wog':
        return 'var(--white)';

      default:
        return 'var(--green)';
    }
  }};

  outline: none;
  border: ${props => {
    switch (props.$variant) {
      case 'wow':
        return '1px solid var(--green)';

      case 'gog':
        return '1px solid var(--white-40)';

      default:
        return 'none';
    }
  }};

  color: ${props => {
    switch (props.$variant) {
      case 'wow':
        return 'var(--green)';

      case 'wog':
        return 'var(--black)';

      default:
        return 'var(--white)';
    }
  }};
  text-align: center;
  font-family: var(--FixelDisplay-Bold);
  font-size: 16px;
  line-height: calc(24 / 16);

  width: ${props => {
    switch (props.$variant) {
      case 'wow':
        return '20px';

      case 'wog':
        return '20px';

      default:
        return '100%';
    }
  }};
  height: ${props => {
    switch (props.$variant) {
      case 'wow':
        return '20px';

      case 'wog':
        return '20px';

      default:
        return '56px';
    }
  }};
  margin-bottom: ${props => props.$marginbottom};

  @media ${devices.tablet} {
    font-size: 18px;
    line-height: calc(28 / 18);
    width: ${props => {
    switch (props.$variant) {
      case 'wow':
        return '20px';

      case 'wog':
        return '20px';

      default:
        return '100%';
    }
  }};
  height: ${props => {
    switch (props.$variant) {
      case 'wow':
        return '20px';

      case 'wog':
        return '20px';

      default:
        return '60px';
    }
  }};
  }

  transition: background-color var(--slow-transform),
    color var(--slow-transform);

  &:hover,
  &:focus {
    background-color: ${props => {
      switch (props.$variant) {
        case 'wow':
          return 'var(--green)';
        case 'wog':
        case 'gog':
          return 'var(--white)';

        default:
          return 'var(--light-green)';
      }
    }};
    color: ${props => {
      switch (props.$variant) {
        case 'gog':
          return 'var(--black)';
        case 'wog':
          return 'var(--green)';

        default:
          return 'var(--white)';
      }
    }};
  }
`;
