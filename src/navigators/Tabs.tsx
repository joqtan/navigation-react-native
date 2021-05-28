import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TabOneScreen from '../screens/TabOneScreen';
import StackNavigator from './StackNavigator';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTabIOS = createBottomTabNavigator();
const BottomTabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabIOS /> : <TabAndroid />;
};

const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{backgroundColor: 'purple'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'TabOneScreen':
              iconName = 'cloud-done';
              break;
            case 'TopTapNavigator':
              iconName = 'cloud-download';
              break;
            case 'StackNavigator':
              iconName = 'cloud-upload';
              break;
          }
          return (
            <Text>
              <Icon name={iconName} size={35} color={color} />
            </Text>
          );
        },
      })}>
      <BottomTabAndroid.Screen
        name="TabOneScreen"
        options={{title: 't1'}}
        component={TabOneScreen}
      />
      <BottomTabAndroid.Screen
        name="TopTapNavigator"
        options={{title: 'Top Nav'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'st'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};
const TabIOS = () => {
  return (
    <BottomTabIOS.Navigator
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: 'purple',
        style: {borderTopWidth: 0, borderTopColor: 'purple', elevation: 0},
        labelStyle: {fontSize: 15},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'TabOneScreen':
              iconName = 'cloud-done';
              break;
            case 'TopTapNavigator':
              iconName = 'cloud-download';
              break;
            case 'StackNavigator':
              iconName = 'cloud-upload';
              break;
          }
          return (
            <Text>
              <Icon name={iconName} size={35} color={color} />
            </Text>
          );
        },
      })}>
      {/* <Tab.Screen
        name="TabOneScreen "
        options={{
          title: 'Tab One',
          tabBarIcon: props => <Text style={{color: props.color}}>T 1</Text>,
        }}
        component={TabOneScreen}
      /> */}
      <BottomTabIOS.Screen
        name="TabOneScreen"
        options={{title: 'Tab One'}}
        component={TabOneScreen}
      />
      <BottomTabIOS.Screen
        name="TopTapNavigator"
        options={{title: 'Top Nav'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
