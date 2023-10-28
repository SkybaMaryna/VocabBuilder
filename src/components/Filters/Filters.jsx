import React from 'react';
import icons from '../../images/sprite.svg';
import {
  StyledDashboardInput,
  StyledIconSearch,
  StyledInputWrapper,
} from './Filters.styled';
import { Selection } from 'components/Selection/Selection';

export const Filters = () => {
  return (
    <div>
      <StyledInputWrapper>
        <StyledDashboardInput placeholder="Find the word" />
        <StyledIconSearch width={20} height={20}>
          <use href={icons + '#icon-search'}></use>
        </StyledIconSearch>
      </StyledInputWrapper>
      <Selection />
    </div>
  );
};
