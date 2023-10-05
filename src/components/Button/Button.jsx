import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({
  text = 'Hello',
  variant,
  type = 'button',
  marginbottom,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      $marginbottom={marginbottom}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};
