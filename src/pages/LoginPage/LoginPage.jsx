import React from 'react';
import { useMediaRules } from 'hooks/mediaRules';
import { Container, LoginForm, Logo } from 'components';
import {
  StyledCaption,
  StyledImgWrapper,
  StyledLogoWrapper,
  StyledWrapper,
} from 'pages/RegisterPage/RegisterPage.styled';

const LoginPage = () => {
  const { isTabletOnly } = useMediaRules();
  return (
    <Container page="auth">
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>
      <StyledWrapper>
        {!isTabletOnly && (
          <StyledImgWrapper>
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

            <StyledCaption>
              Word · Translation · Grammar · Progress
            </StyledCaption>
          </StyledImgWrapper>
        )}

        <LoginForm />
        {isTabletOnly && (
          <StyledCaption>Word · Translation · Grammar · Progress</StyledCaption>
        )}
      </StyledWrapper>
    </Container>
  );
};

export default LoginPage;
