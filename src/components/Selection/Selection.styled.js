import styled from 'styled-components';

export const StyledRadioInputBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledRadioInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
`;

export const StyledLabel = styled.label`
  color: var(--black);

  text-align: center;
  font-family: var(--FixelDisplay);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  position: relative;
  cursor: pointer;

  padding-left: 26px;

  &::before {
    content: '';
    position: absolute;
    /* z-index: 200; */
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border: 2px solid var(--black-20);
    border-radius: 50%;
  }
  &.checked::before {
    border-color: var(--green);
  }

  &.checked ${StyledRadioInput}::before {
    background-color: var(--green);
    border-color: var(--green);
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    /* z-index: 200; */
    top: -9px;
    left: -22px;
  }
`;
