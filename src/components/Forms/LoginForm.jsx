// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { registrationThunk } from 'redux/Auth/authOperations';
// import { useSearchParams } from 'react-router-dom';
// import { verifyThunk } from 'redux/Auth/authOperations';
import { Button, LoginSchema } from 'components';
// import { handleEyeClick } from 'redux/Auth/authSlice';
// import { selectIsClicked } from 'redux/selectors';
import {
  StyledError,
  StyledForm,
  StyledFormInsight,
  StyledInput,
  StyledInputWrap,
  StyledTitle,
  StyledInnerDiv,
  StyledMessage,
  StyledPasswordDiv,
  StyledNavLink,
  StyledLoginText,
  StyledIconEyeOff,
  StyledIconEye,
  StyledIconError,
  StyledSuccessMessage,
  StyledIconSuccess,
} from './Forms.styled';
import { useState } from 'react';
import icons from '../../images/sprite.svg';

export const LoginForm = () => {
  const [isClicked, setIsClicked] = useState(false);
  //   const dispatch = useDispatch();

  //   const [searchParams] = useSearchParams();
  //   const verificationToken = searchParams.get('verificationToken');

  //   useEffect(() => {
  //     if (verificationToken === null) return;
  //     dispatch(verifyThunk(verificationToken));
  //   }, [verificationToken, dispatch]);

  return (
    <StyledForm
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      //   onSubmit={values => {
      //     dispatch(registrationThunk(values));
      //   }}
    >
      {({ errors, touched, handleChange, setFieldTouched }) => (
        <StyledFormInsight>
          <StyledTitle>Login</StyledTitle>
          <StyledLoginText>
            Please enter your login details to continue using our service:
          </StyledLoginText>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                type="email"
                name="email"
                placeholder="Email"
                onChange={e => {
                  setFieldTouched('email');
                  handleChange(e);
                }}
                className={
                  touched.email && !errors.email
                    ? 'valid-border'
                    : errors.email && touched.email
                    ? 'invalid-border'
                    : ''
                }
              />
              {errors.email && touched.email && (
                <StyledMessage>
                  <StyledIconError width="16" height="16">
                    <use href={icons + '#icon-error'}></use>
                  </StyledIconError>
                  <StyledError name="email" component="div" />
                </StyledMessage>
              )}
              {touched.email && !errors.email && (
                <StyledMessage>
                  <StyledIconSuccess width="16" height="16">
                    <use href={icons + '#icon-success'}></use>
                  </StyledIconSuccess>
                  <StyledSuccessMessage>Success email</StyledSuccessMessage>
                </StyledMessage>
              )}
            </StyledInputWrap>
            <StyledInputWrap>
              <StyledPasswordDiv>
                <StyledInput
                  id="password"
                  type={isClicked ? 'text' : 'password'}
                  name="password"
                  onChange={e => {
                    setFieldTouched('password');
                    handleChange(e);
                  }}
                  placeholder="Password"
                  className={
                    touched.password && !errors.password
                      ? 'valid-border'
                      : errors.password && touched.password
                      ? 'invalid-border'
                      : ''
                  }
                />
                {!isClicked ? (
                  <StyledIconEyeOff
                    width="20"
                    height="20"
                    onClick={() => setIsClicked(!isClicked)}
                  >
                    <use href={icons + '#icon-eyeOff'}></use>
                  </StyledIconEyeOff>
                ) : (
                  <StyledIconEye
                    width="20"
                    height="20"
                    onClick={() => setIsClicked(!isClicked)}
                  >
                    <use href={icons + '#icon-eye'}></use>
                  </StyledIconEye>
                )}
              </StyledPasswordDiv>
              {errors.password && touched.password && (
                <StyledMessage>
                  <StyledIconError width="16" height="16">
                    <use href={icons + '#icon-error'}></use>
                  </StyledIconError>
                  <StyledError name="password" component="div" />
                </StyledMessage>
              )}
              {touched.password && !errors.password && (
                <StyledMessage>
                  <StyledIconSuccess width="16" height="16">
                    <use href={icons + '#icon-success'}></use>
                  </StyledIconSuccess>
                  <StyledSuccessMessage>Success password</StyledSuccessMessage>
                </StyledMessage>
              )}
            </StyledInputWrap>
          </StyledInnerDiv>
          <Button type="submit" text="Login" marginbottom="16px" />
          <StyledNavLink to="/register">Register</StyledNavLink>
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};
