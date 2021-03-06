import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const BasicLateralMenu = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator drawerType={width >= 424 ? 'permanent' : 'front'}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
