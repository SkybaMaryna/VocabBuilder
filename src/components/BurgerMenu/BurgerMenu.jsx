import React from 'react';
import icons from '../../images/sprite.svg';
import { UserBar, UserNav } from 'components';
import {
  StyledBurgerMenu,
  StyledDropdown,
  StyledIconClose,
} from './BurgerMenu.styled';

export const BurgerMenu = () => {
  return (
    <StyledDropdown>
      <StyledBurgerMenu>
        <UserBar page="menu" />
        <StyledIconClose>
          <use href={icons + '#icon-close'}></use>
        </StyledIconClose>
        <UserNav />
      </StyledBurgerMenu>
    </StyledDropdown>
  );
};
