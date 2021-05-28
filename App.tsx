import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LateralMenu} from './src/navigators/LateralMenu';
// import StackNavigator from './src/navigators/StackNavigator';
// import {BasicLateralMenu} from './src/navigators/BasicLateralMenu';
// import {Tabs} from './src/navigators/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicLateralMenu /> */}
      <LateralMenu />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
}
