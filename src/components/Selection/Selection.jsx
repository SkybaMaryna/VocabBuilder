import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/selectors';
import Select from 'react-select';
import {
  StyledLabel,
  StyledRadioInput,
  StyledRadioInputBox,
  StyledSelect,
} from './Selection.styled';
import { useMediaRules } from 'hooks/mediaRules';

export const Selection = () => {
  const ListOfCategories = useSelector(selectCategories);
  const [selectedOption, setSelectedOption] = useState({
    value: 'categories',
    label: 'Categories',
  });
  const [verbType, setVerbType] = useState('regular');
  const { isTablet } = useMediaRules();

  const options = ListOfCategories.reduce(
    (acc, category) => {
      acc.push({
        value: category,
        label: category[0].toUpperCase() + category.slice(1),
      });
      return acc;
    },
    [{ value: 'categories', label: 'Categories' }]
  );

  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: '1px solid',
      borderColor: state.isFocused ? 'var(--green)' : 'var(--black-10)',
      backgroundColor: 'transparent',
      borderRadius: '15px',
      width: isTablet ? '164px' : '343px',
      height: '48px',
      padding: '12px 24px',
    }),
    clearIndicator: (baseStyles, state) => ({
      ...baseStyles,
      display: 'none',
    }),
    indicatorSeparator: (baseStyles, state) => ({
      ...baseStyles,
      display: 'none',
    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      width: isTablet ? '189px' : '343px',
      height: '368px',
      background: 'var(--white)',
      borderRadius: '15px',
      boxShadow: '0px 4px 47px 0px var(--black-80)',
      padding: '12px 24px',
    }),
    menuList: (baseStyles, state) => ({
      ...baseStyles,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      maxHeight: '344px',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: 'var(--black)',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: 'calc(24/16)',
    }),
  };

  return (
    <StyledSelect>
      <Select
        defaultValue={selectedOption}
        placeholder={'Categories'}
        onChange={setSelectedOption}
        options={options}
        isClearable
        backspaceRemovesValue
        blurInputOnSelect
        captureMenuScroll
        closeMenuOnSelect
        hideSelectedOptions
        unstyled
        styles={styles}
      />
      {selectedOption.value === 'verb' && (
        <StyledRadioInputBox>
          <StyledLabel className={verbType === 'regular' && 'checked'}>
            <StyledRadioInput
              type="radio"
              name="verbType"
              value="regular"
              onClick={() => setVerbType('regular')}
            />
            Regular
          </StyledLabel>
          <StyledLabel className={verbType === 'irregular' && 'checked'}>
            <StyledRadioInput
              type="radio"
              name="verbType"
              value="irregular"
              onClick={() => setVerbType('irregular')}
            />
            Irregular
          </StyledLabel>
        </StyledRadioInputBox>
      )}
    </StyledSelect>
  );
};
