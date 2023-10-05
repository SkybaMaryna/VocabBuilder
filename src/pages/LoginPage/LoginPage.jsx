import { LoginForm, Logo } from 'components';
import React from 'react';
import { StyledCaption } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <>
      <Logo />
      <img
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
      <StyledCaption>Word · Translation · Grammar · Progress</StyledCaption>
      <LoginForm />
    </>
  );
};

export default LoginPage;
