import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Counter from './src/Screens/Counter';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import 'react-native-gesture-handler';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
import AsyncStorage from '@react-native-community/async-storage';

RNAsyncStorageFlipper(AsyncStorage);

export type RootStackParamList = {
  Home: undefined;
  Counter: {itemId: number};
};

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Counter' | 'Home'
>;

export type CounterScreenRouteProp = RouteProp<RootStackParamList, 'Counter'>;

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
