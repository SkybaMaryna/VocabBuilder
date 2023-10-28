import React from 'react';
import { useSelector } from 'react-redux';
import { selectCountWords } from 'redux/selectors';
import { StyledCount, StyledStatistic, StyledText } from './Statistics.styled';

export const Statistics = () => {
  const CountWords = useSelector(selectCountWords);

  return (
    <StyledStatistic>
      <StyledText>To study:</StyledText>
      <StyledCount>{CountWords}</StyledCount>
    </StyledStatistic>
  );
};
