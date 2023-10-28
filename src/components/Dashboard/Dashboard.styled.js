import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
