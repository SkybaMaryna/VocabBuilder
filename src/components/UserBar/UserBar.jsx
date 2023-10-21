import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import { StyledName, StyledUserBar, StyledUserImg } from './UserBar.styled';

export const UserBar = ({ page }) => {
  const userName = useSelector(selectUserName);

  return (
    <StyledUserBar $page={page}>
      <StyledName $page={page}>{userName}</StyledName>
      <StyledUserImg $page={page}>{userName[0]}</StyledUserImg>
    </StyledUserBar>
  );
};
