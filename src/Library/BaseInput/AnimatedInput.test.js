import React from 'react';
import {fireEvent, render, wait} from '@testing-library/react-native';
import AnimatedInput from './AnimatedInput';

test('AnimatedInput', async () => {
  const placeholder = 'palceholder test';
  let value = 'value test';
  const onChangeText = (text) => {
    value = text;
  };
  const placeholderColor = 'black';
  const {getByTestId, getByText, queryByTestId, baseElement, rerender} = render(
    <AnimatedInput
      placeholderColor={placeholderColor}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />,
  );

  expect(getByTestId('textInput').props.value).toBe(value);
  const input = getByTestId('textInput');
  fireEvent.focus(input);
  await wait(() =>
    expect(getByTestId('borderBottom').props.style.left).toBe('0%'),
  );
  fireEvent.change(input, {nativeEvent: {text: value + '!'}});
  fireEvent.blur(input);
  await wait(() =>
    expect(getByTestId('borderBottom').props.style.left).toBe('50%'),
  );
  expect(getByTestId('textInput').props.value).toBe(value);
  expect(baseElement).toMatchSnapshot();
});
