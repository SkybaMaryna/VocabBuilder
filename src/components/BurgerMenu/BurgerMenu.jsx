import React from 'react';
import icons from '../../images/sprite.svg';
import { UserBar, UserNav } from 'components';
import {
  StyledBurgerMenu,
  StyledDropdown,
  StyledIconClose,
  StyledImgWrapper,
} from './BurgerMenu.styled';

export const BurgerMenu = ({ onClose, isOpenMenu }) => {

  return (
    <StyledDropdown>
      <StyledBurgerMenu $isopenmenu={isOpenMenu.toString()}>
        <UserBar page="menu" />
        <StyledIconClose onClick={onClose}>
          <use href={icons + '#icon-close'}></use>
        </StyledIconClose>
        <UserNav onClose={onClose}/>
        <StyledImgWrapper>
          <img
            srcSet={`
          ${require('../../images/illustration-185.png')} 185w,
          ${require('../../images/illustration-370.png')} 370w,
          ${require('../../images/illustration-300.png')} 300w,
          ${require('../../images/illustration-600.png')} 600w`}
            sizes="(min-width: 768px) 300px, (min-width: 375px) 185px, 100vw"
            src={require('../../images/illustration-185.png')}
            alt="a girl and a boy are reading books"
            loading="lazy"
          />
        </StyledImgWrapper>
      </StyledBurgerMenu>
    </StyledDropdown>
  );
};
