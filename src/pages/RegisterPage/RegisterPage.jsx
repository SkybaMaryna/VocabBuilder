import React from 'react';
import { Logo, RegisterForm } from 'components';
import { StyledCaption } from 'pages/LoginPage/LoginPage.styled';
import { useMediaRules } from 'hooks/mediaRules';
import {
  StyledImg,
  StyledImgWrapper,
  StyledLogoWrapper,
  StyledWrapper,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const { isDesktop, isTabletOnly } = useMediaRules();

  return (
    <>
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>
      <StyledWrapper>
        <StyledImgWrapper>
          {!isTabletOnly && (
            <StyledImg
              srcSet={`
          ${require('../../images/illustration-247.png')} 247w,
          ${require('../../images/illustration-494.png')} 494w,
          ${require('../../images/illustration-498.png')} 498w,
          ${require('../../images/illustration-996.png')} 996w`}
              sizes="(min-width: 768px) 498px, (min-width: 375px) 247px, 100vw"
              src={require('../../images/illustration-247.png')}
              alt="a girl and a boy are reading books"
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
    </>
  );
};

export default RegisterPage;
