import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PageOne from '../screens/PageOne';
import PageTwo from '../screens/PageTwo';
import PageThree from '../screens/PageThree';
import PersonScreen from '../screens/PersonScreen';

export type RootStackParams = {
  PageOne: undefined;
  PageTwo: undefined;
  PageThree: undefined;
  Person: {
    id: number;
    name: string;
  };
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {elevation: 0, shadowColor: 'transparent'},
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen
        name="PageOne"
        options={{title: 'Page One'}}
        component={PageOne}
      />
      <Stack.Screen
        name="PageTwo"
        options={{title: 'Page Two'}}
        component={PageTwo}
      />
      <Stack.Screen
        name="PageThree"
        options={{title: 'Page Three'}}
        component={PageThree}
      />
      <Stack.Screen
        name="Person"
        options={{title: 'Person'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
