import React from 'react';
import { navRoutes } from 'constants/navRoutes';
import { StyledNavLink, StyledNavList } from './UserNav.styled';

export const UserNav = ({ onClose }) => {
  return (
    <nav>
      <StyledNavList>
        {navRoutes.map(({ name, route }) => (
          <li key={name}>
            <StyledNavLink to={route} onClick={onClose}>
              {name}
            </StyledNavLink>
          </li>
        ))}
      </StyledNavList>
    </nav>
  );
};
