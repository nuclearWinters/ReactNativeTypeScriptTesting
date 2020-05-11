import React from 'react';
import {render} from '@testing-library/react-native';
import Home from './Home';

test('Home', () => {
  const {getByTestId, getByText, queryByTestId, baseElement} = render(
    <Home props={{navigation: {navigate: () => {}}}} />,
  );
  const button = getByText('Ir a la pantalla de Contador');
  expect(button).toBeTruthy();
  const title = getByText('Welcome to React');
  expect(title).toBeTruthy();
  expect(baseElement).toMatchSnapshot();
});
