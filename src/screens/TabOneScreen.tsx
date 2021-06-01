import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/AppTheme';
import TouchableIcon from '../components/TouchableIcon';

const TabOneScreen = () => {
  useEffect(() => {
    console.log('tab one screen effect');
  }, []);
  const {top} = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, paddingTop: top}}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <TouchableIcon iconName="airplane" />
        <TouchableIcon iconName="toggle" />
        <TouchableIcon iconName="globe" />
        <TouchableIcon iconName="mic-circle" />
      </Text>
    </View>
  );
};

export default TabOneScreen;
