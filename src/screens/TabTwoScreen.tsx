import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const TabTwoScreen = () => {
  useEffect(() => {
    console.log('input two screen effect');
  }, []);
  return (
    <View>
      <Text>Tab Two Screen</Text>
    </View>
  );
};

export default TabTwoScreen;
