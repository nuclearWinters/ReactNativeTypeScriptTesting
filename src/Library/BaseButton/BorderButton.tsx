import React from 'react';
import BaseButton, {Props} from './BaseButton';
import {StyleSheet} from 'react-native';

const defaultStyles = StyleSheet.create({
  boxStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  textStyle: {
    fontSize: 18,
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 6,
  },
});

const {boxStyle, textStyle} = defaultStyles;

const BorderButton: React.FC<Props> = ({onPress, text, styles}) => (
  <BaseButton
    styles={{
      boxStyle: [boxStyle, styles?.boxStyle],
      textStyle: [textStyle, styles?.textStyle],
    }}
    onPress={onPress}
    text={text}
  />
);

export default BorderButton;
