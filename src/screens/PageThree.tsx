import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/AppTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const PageThree = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page three Screen</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
      <Button title="Go home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
export default PageThree;
