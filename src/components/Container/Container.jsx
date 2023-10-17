import { StyledContainer } from './Container.styled';

export const Container = ({ children, page }) => {
  return <StyledContainer page={page}>{children}</StyledContainer>;
};