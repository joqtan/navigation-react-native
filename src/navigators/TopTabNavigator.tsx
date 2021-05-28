import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        pressColor: 'purple',
        showIcon: true,
        activeTintColor: 'purple',
        indicatorStyle: {backgroundColor: 'purple'},
        style: {shadowColor: 'transparent', elevation: 0},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbubbles';
              break;
            case 'ContactsScreen':
              iconName = 'people-circle';
              break;
            case 'AlbumsScreen':
              iconName = 'albums';
              break;
          }
          return (
            <Text>
              <Icon name={iconName} size={25} color={color} />
            </Text>
          );
        },
      })}>
      <Tab.Screen
        name="ChatScreen"
        options={{title: 'Chat'}}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{title: 'Contacts'}}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{title: 'Albums'}}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};
