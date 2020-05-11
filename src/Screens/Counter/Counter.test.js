import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import Counter from './Counter';
import {Provider} from 'react-redux';
import store from '../../Redux/Store';

afterEach(cleanup);

test('Home', async () => {
  const {getByText, baseElement} = render(
    <Provider store={store}>
      <Counter route={{params: {itemId: 10}}} />
    </Provider>,
  );
  const title1 = getByText('10');
  expect(title1).toBeTruthy();
  const title2 = getByText('¡Cambia el estado en Redux!');
  expect(title2).toBeTruthy();
  const button1 = getByText('Menos');
  expect(button1).toBeTruthy();
  const button2 = getByText('Reiniciar');
  expect(button2).toBeTruthy();
  const button3 = getByText('Más');
  expect(button3).toBeTruthy();
  const counter = getByText('0');
  expect(counter).toBeTruthy();
  const button4 = getByText('PRESS ME');
  expect(button4).toBeTruthy();
  fireEvent.press(button1);
  expect(counter.props.children).toBe(-1);
  expect(baseElement).toMatchSnapshot();
});
