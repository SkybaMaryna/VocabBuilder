import React from 'react';
import { Container, Logo, RegisterForm } from 'components';
import { useMediaRules } from 'hooks/mediaRules';
import {
  StyledCaption,
  StyledImgWrapper,
  StyledLogoWrapper,
  StyledWrapper,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const { isDesktop, isTabletOnly } = useMediaRules();

  return (
    <Container page="auth">
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>
      <StyledWrapper page="register">
        <StyledImgWrapper>
          {!isTabletOnly && (
            <img
              srcSet={`
          ${require('../../images/illustration-247.png')} 247w,
          ${require('../../images/illustration-494.png')} 494w,
          ${require('../../images/illustration-498.png')} 498w,
          ${require('../../images/illustration-996.png')} 996w`}
              sizes="(min-width: 768px) 498px, (min-width: 375px) 247px, 100vw"
              src={require('../../images/illustration-247.png')}
              alt="a girl and a boy are reading books"
              width="247"
              loading="lazy"
            />
          )}
          {isDesktop && (
            <StyledCaption>
              Word · Translation · Grammar · Progress
            </StyledCaption>
          )}
        </StyledImgWrapper>
        <RegisterForm />
        {isTabletOnly && (
          <StyledCaption>Word · Translation · Grammar · Progress</StyledCaption>
        )}
      </StyledWrapper>
    </Container>
  );
};

export default RegisterPage;
