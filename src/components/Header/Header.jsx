import React from 'react';
import { Logo, UserBar, UserNav } from 'components';
import { useMediaRules } from 'hooks/mediaRules';

export const Header = () => {
  const { isDesktop } = useMediaRules();
  return (
    <>
      <Logo />
      {isDesktop && <UserNav />}
      <UserBar />
    </>
  );
};
