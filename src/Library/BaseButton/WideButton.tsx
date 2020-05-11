import React from 'react';
import BaseButton, {Props} from './BaseButton';
import {StyleSheet} from 'react-native';

const defaultStyles = StyleSheet.create({
  boxStyle: {
    alignSelf: 'center',
    marginVertical: 64,
    backgroundColor: 'rgb(0,100,180)',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 100,
  },
  textStyle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const {boxStyle, textStyle} = defaultStyles;

const WideButton: React.FC<Props> = ({onPress, text, styles}) => (
  <BaseButton
    styles={{
      boxStyle: [boxStyle, styles?.boxStyle],
      textStyle: [textStyle, styles?.textStyle],
    }}
    onPress={onPress}
    text={text}
  />
);
export default WideButton;
