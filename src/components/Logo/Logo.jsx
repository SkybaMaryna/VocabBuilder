import React from 'react';
import icons from '../../images/sprite.svg';
import { StyledIconLogo, StyledLogo, StyledName } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLogo>
      <StyledIconLogo>
        <use href={icons + '#icon-logo'}></use>
      </StyledIconLogo>

      <StyledName>VocabBuilder</StyledName>
    </StyledLogo>
  );
};
