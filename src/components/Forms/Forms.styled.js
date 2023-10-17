import { Formik, Form, Field, ErrorMessage } from 'formik';
import { devices } from 'constants/breakpoints';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledForm = styled(Formik)``;
export const StyledFormInsight = styled(Form)`
  max-width: 375px;
  width: 100%;
  height: auto;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;

  background: var(--green-10);
  padding: 32px 16px;

  @media ${devices.tablet} {
    max-width: 628px;
    padding: 48px 64px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`;
export const StyledTitle = styled.h2`
  color: var(--black);
  font-family: var(--FixelDisplay-SemiBold);
  font-size: 30px;
  line-height: calc(32 / 30);
  letter-spacing: -0.6px;
  margin-bottom: 16px;

  @media ${devices.tablet} {
    font-size: 40px;
    line-height: calc(48 / 40);
    letter-spacing: -0.8px;
    margin-bottom: 20px;
  }
`;
export const StyledLoginText = styled.p`
  color: var(--black-80);
  font-family: var(--FixelDisplay);
  font-size: 16px;
  line-height: calc(24 / 16);
  margin-bottom: 40px;

  @media ${devices.tablet} {
    font-size: 20px;
    line-height: calc(30 / 20);
    margin-bottom: 32px;
  }
`;
export const StyledInputWrap = styled.div`
  width: 100%;
  position: relative;
`;
export const StyledIconEye = styled.svg`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  stroke: black;
  fill: white;
`;
export const StyledIconEyeOff = styled.svg`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  stroke: black;
  fill: white;
`;
export const StyledInput = styled(Field)`
  justify-content: center;
  height: 56px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--black-10);
  background-color: transparent;
  padding: 16px 18px;
  padding-right: 50px;
  color: var(--black);
  font-family: var(--FixelDisplay);
  font-size: 16px;
  line-height: calc(24 / 16);
  transition: border-color var(--slow-transform);

  ::placeholder {
    color: var(--black);
  }

  &:focus,
  &:hover {
    outline: 1px solid var(--green);
    border-color: var(--green);
  }
  &.valid-border {
    border-color: var(--success-message);
    outline: none;
  }
  &.invalid-border {
    border-color: var(--error-message);
    outline: none;
  }
`;

export const StyledError = styled(ErrorMessage)`
  font-family: var(--FixelDisplay);
  font-size: 12px;
  line-height: calc (18 / 12);
  color: var(--error-message);
  letter-spacing: 0.12px;
`;
export const StyledIconError = styled.svg``;

export const StyledInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;

  @media ${devices.tablet} {
    gap: 18px;
  }
`;
export const StyledSuccessMessage = styled.p`
  font-family: var(--FixelDisplay);
  font-size: 12px;
  line-height: calc (18 / 12);
  color: var(--success-message);
  letter-spacing: 0.12px;
`;

export const StyledIconSuccess = styled.svg``;
export const StyledMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;
export const StyledPasswordDiv = styled.div`
  position: relative;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--black-50);
  font-family: var(--FixelDisplay-Bold);
  font-size: 16px;

  line-height: calc(24 / 16);
  display: block;
  width: fit-content;
  margin: 0 auto;
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: var(--black-50);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;
