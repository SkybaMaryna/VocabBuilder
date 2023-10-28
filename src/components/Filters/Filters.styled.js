import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  position: relative;
  width: 343px;

  @media ${devices.tablet} {
    width: 274px;
  }
`;

export const StyledDashboardInput = styled.input`
  width: 100%;
  color: var(--black);
  background-color: transparent;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  padding: 12px 24px;
  padding-right: 44px;
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--black-10);
  transition: border-color var(--slow-transform);
  outline: none;

  &::placeholder {
    color: var(--black);
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: calc(24 / 16);
  }

  &:hover,
  &:focus {
    border-color: var(--green);
  }
`;

export const StyledIconSearch = styled.svg`
  stroke: var(--black);
  fill: transparent;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`;
