import React from 'react';
import { StyledIconLogo, StyledLogo, StyledName } from './Logo.styled';
import icons from '../../images/sprite.svg';

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
