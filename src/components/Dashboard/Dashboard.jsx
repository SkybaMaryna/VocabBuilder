import React from 'react';
import { Filters, Statistics } from 'components';
import icons from '../../images/sprite.svg';
import {
  StyledButtonWrapper,
  StyledDashboard,
  StyledDashboardButton,
  StyledDashboardLink,
  StyledDashboardWrapper,
} from './Dashboard.styled';

export const Dashboard = ({ page }) => {
  return (
    <StyledDashboard>
      <Filters />
      <StyledDashboardWrapper>
        <Statistics />
        <StyledButtonWrapper>
          {page === 'dictionary' && (
            <StyledDashboardButton>
              Add word
              <svg width={20} height={20}>
                <use href={icons + '#icon-plus'}></use>
              </svg>
            </StyledDashboardButton>
          )}
          <StyledDashboardLink to={'/main/training'}>
            Train oneself
            <svg width={20} height={20}>
              <use href={icons + '#icon-arrowRight'}></use>
            </svg>
          </StyledDashboardLink>
        </StyledButtonWrapper>
      </StyledDashboardWrapper>
    </StyledDashboard>
  );
};
