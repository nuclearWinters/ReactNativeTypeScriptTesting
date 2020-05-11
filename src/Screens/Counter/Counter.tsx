// @refresh reset
import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTypedSelector, RootState} from '../../Redux/Reducers/Reducers';
import {RootStackParamList} from '../../../App';
import {Counter} from '../../Redux/Ducks';
import {ThunkDispatch} from 'redux-thunk';
import {CounterActionTypes} from '../../Redux/Ducks/Counter';
import BorderButton from '../../Library/BaseButton/BorderButton';
import WideButton from '../../Library/BaseButton/WideButton';
import AnimatedInput from '../../Library/BaseInput/AnimatedInput';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Counter'>;

const CounterScreen: React.FC<Props> = (props) => {
  const {route} = props;
  const counter = useTypedSelector((state) => state.counter);
  const dispatch = useDispatch<
    ThunkDispatch<RootState, undefined, CounterActionTypes>
  >();
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 32, paddingVertical: 14}}>
        {route.params.itemId}
      </Text>
      <Text style={{textAlign: 'center', marginVertical: 20, fontSize: 24}}>
        {counter.string}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <BorderButton
          text={'Menos'}
          onPress={() => {
            dispatch(Counter.decreaseCounter());
          }}
        />
        <BorderButton
          text={'Reiniciar'}
          onPress={() => {
            dispatch(Counter.setCounter(route.params.itemId));
          }}
        />
        <BorderButton
          text={'Más'}
          onPress={() => {
            dispatch(Counter.increaseCounter());
          }}
        />
      </View>
      <Text style={{textAlign: 'center', fontSize: 32, paddingVertical: 14}}>
        {counter.integer}
      </Text>
      <AnimatedInput
        placeholder="Ingresa un nuevo título"
        value={counter.string}
        onChangeText={(text) => {
          dispatch(Counter.setString(text));
        }}
        placeholderColor="gray"
      />
      <WideButton
        text="PRESS ME"
        onPress={() => {
          dispatch(Counter.mockFetch())
            .then((res) => {
              console.log(res);
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      />
    </View>
  );
};

export default CounterScreen;
