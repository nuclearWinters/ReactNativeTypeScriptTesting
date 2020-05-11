import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import BaseButton from './BaseButton';

test('BaseButton', async () => {
  const onPress = () => {};
  const text = 'Test';
  const {getByTestId, getByText, queryByTestId, baseElement} = render(
    <BaseButton onPress={onPress} text={text} />,
  );
  const button = getByTestId('box');
  fireEvent.press(button);
  expect(queryByTestId('box')).toBeTruthy();
  const textButton = getByTestId('text');
  expect(textButton.props.children).toBe(text);
  expect(baseElement).toMatchSnapshot();
});
