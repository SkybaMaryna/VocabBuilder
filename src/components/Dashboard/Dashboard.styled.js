import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${devices.tablet} {
    gap: 28px;
  }

  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledDashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const StyledDashboardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--black);
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const StyledDashboardLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--black);
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  width: 128px;
  height: 24px;
`;
