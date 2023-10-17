import React, { useState } from 'react';
import { useMediaRules } from 'hooks/mediaRules';
import { NavLink } from 'react-router-dom';
import { BurgerMenu, Logo, UserBar, UserNav } from 'components';
import icons from '../../images/sprite.svg';
import { StyledHeader, StyledIconBurger, StyledWrapper } from './Header.styled';

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { isDesktop } = useMediaRules();

  return (
    <>
      <StyledHeader>
        <NavLink to="/main/dictionary">
          <Logo />
        </NavLink>
        {isDesktop && <UserNav />}
        <StyledWrapper>
          <UserBar />
          {!isDesktop && (
            <StyledIconBurger
              width="32"
              height="22"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <use href={icons + '#icon-Nav'}></use>
            </StyledIconBurger>
          )}
        </StyledWrapper>
      </StyledHeader>
      {isOpenMenu && !isDesktop && <BurgerMenu />}
    </>
  );
};
