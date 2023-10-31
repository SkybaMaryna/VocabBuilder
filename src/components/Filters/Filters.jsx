import React from 'react';
import icons from '../../images/sprite.svg';
import { Selection } from 'components/Selection/Selection';
import {
  StyledDashboardInput,
  StyledFiltersWrapper,
  StyledIconSearch,
  StyledInputWrapper,
} from './Filters.styled';

export const Filters = () => {
  return (
    <StyledFiltersWrapper>
      <StyledInputWrapper>
        <StyledDashboardInput placeholder="Find the word" />
        <StyledIconSearch width={20} height={20}>
          <use href={icons + '#icon-search'}></use>
        </StyledIconSearch>
      </StyledInputWrapper>
      <Selection />
    </StyledFiltersWrapper>
  );
};
