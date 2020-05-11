import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import WideButton from './WideButton';

test('BorderButton', async () => {
  const onPress = () => {};
  const text = 'Test';
  const {getByTestId, getByText, queryByTestId, baseElement} = render(
    <WideButton onPress={onPress} text={text} />,
  );
  const button = getByTestId('box');
  console.log(button.type);
  fireEvent.press(button);
  expect(queryByTestId('box')).toBeTruthy();
  const textButton = getByTestId('text');
  expect(textButton.props.children).toBe(text);
  expect(baseElement).toMatchSnapshot();
});
