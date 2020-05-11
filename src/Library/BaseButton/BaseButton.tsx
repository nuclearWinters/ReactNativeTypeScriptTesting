import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface Props {
  styles?: {
    boxStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
  };
  onPress(event: GestureResponderEvent): void;
  text: string;
}

const BaseButton: React.FC<Props> = ({onPress, styles, text}) => (
  <TouchableOpacity onPress={onPress} style={[styles?.boxStyle]} testID="box">
    <Text style={[styles?.textStyle]} testID="text">
      {text}
    </Text>
  </TouchableOpacity>
);

export default BaseButton;
