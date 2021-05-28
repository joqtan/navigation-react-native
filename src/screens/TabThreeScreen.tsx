import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const TabThreeScreen = () => {
  useEffect(() => {
    console.log('tab screen three effect');
  }, []);
  return (
    <View>
      <Text>Tab Three Screen</Text>
    </View>
  );
};

export default TabThreeScreen;
