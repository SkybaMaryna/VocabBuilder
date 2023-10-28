import React from 'react';
import { Filters, Statistics } from 'components';
import icons from '../../images/sprite.svg';
import { StyledDashboardButton, StyledDashboardLink } from './Dashboard.styled';

export const Dashboard = () => {
  return (
    <div>
      <Filters />
      <Statistics />
      <StyledDashboardButton>
        Add word
        <svg width={20} height={20}>
          <use href={icons + '#icon-plus'}></use>
        </svg>
      </StyledDashboardButton>
      <StyledDashboardLink to={'/main/training'}>
        Train oneself
        <svg width={20} height={20}>
          <use href={icons + '#icon-arrowRight'}></use>
        </svg>
      </StyledDashboardLink>
    </div>
  );
};
