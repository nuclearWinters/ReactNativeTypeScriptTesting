import React from 'react';
import {
  View,
  TextInput,
  Animated,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface Props {
  styles?: {
    box?: StyleProp<ViewStyle>;
    borderBottom?: StyleProp<ViewStyle>;
    textInput?: StyleProp<TextStyle>;
  };
  placeholder: string;
  value: string;
  onChangeText(text: string): void;
  placeholderColor: string;
}

const BaseButton: React.FC<Props> = ({
  styles,
  value,
  onChangeText,
  placeholder,
}) => {
  const LeftRight = new Animated.Value(0);
  const LeftRightInterpolate = LeftRight.interpolate({
    inputRange: [0, 1],
    outputRange: ['50%', '0%'],
  });
  return (
    <View style={[styles?.box]} testID="box">
      <TextInput
        testID="textInput"
        onFocus={() => {
          Animated.timing(LeftRight, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
          }).start();
        }}
        onBlur={() => {
          Animated.timing(LeftRight, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
          }).start();
        }}
        placeholder={placeholder}
        style={[styles?.textInput]}
        placeholderTextColor="gray"
        value={value}
        onChangeText={onChangeText}
      />
      <Animated.View
        testID="borderBottom"
        style={[
          {
            position: 'absolute',
            left: LeftRightInterpolate,
            right: LeftRightInterpolate,
            bottom: 0,
            height: 2,
            backgroundColor: 'black',
          },
          styles?.borderBottom,
        ]}
      />
    </View>
  );
};

export default BaseButton;
