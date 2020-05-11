import React from 'react';
import BaseInput, {Props} from './BaseInput';
import {StyleSheet} from 'react-native';

const defaultStyles = StyleSheet.create({
  box: {
    marginHorizontal: 40,
  },
  borderBottom: {
    backgroundColor: 'rgb(0,100,180)',
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
    fontSize: 18,
    color: 'black',
  },
});

const {box, borderBottom, textInput} = defaultStyles;

const AnimatedInput: React.FC<Props> = ({
  placeholder,
  placeholderColor,
  onChangeText,
  value,
  styles,
}) => (
  <BaseInput
    onChangeText={onChangeText}
    placeholderColor={placeholderColor}
    placeholder={placeholder}
    value={value}
    styles={{
      box: [box, styles?.box],
      borderBottom: [borderBottom, styles?.borderBottom],
      textInput: [textInput, styles?.textInput],
    }}
  />
);

export default AnimatedInput;
