import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import { StyledName, StyledUserBar, StyledUserImg } from './UserBar.styled';

export const UserBar = () => {
  const userName = useSelector(selectUserName);

  return (
    <StyledUserBar>
      <StyledName>{userName}</StyledName>
      <StyledUserImg>{userName[0]}</StyledUserImg>
    </StyledUserBar>
  );
};
