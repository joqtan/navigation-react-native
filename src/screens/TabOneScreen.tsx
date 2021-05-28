import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const TabOneScreen = () => {
  useEffect(() => {
    console.log('tab one screen effect');
  }, []);
  const {top} = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, paddingTop: top}}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="airplane" size={50} color="purple" />
        <Icon name="toggle" size={50} color="purple" />
        <Icon name="globe" size={50} color="purple" />
        <Icon name="mic-circle" size={50} color="purple" />
      </Text>
    </View>
  );
};

export default TabOneScreen;
