import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LateralMenu} from './src/navigators/LateralMenu';
import {AuthProvider} from './src/context/AuthContext';
// import StackNavigator from './src/navigators/StackNavigator';
// import {BasicLateralMenu} from './src/navigators/BasicLateralMenu';
// import {Tabs} from './src/navigators/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <BasicLateralMenu /> */}
        <LateralMenu />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
