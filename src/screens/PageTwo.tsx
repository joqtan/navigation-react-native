import {View, Text, Button} from 'react-native';
import {styles} from '../theme/AppTheme';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';

interface Props extends StackScreenProps<any, any> {}

const PageTwo = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'My title',
      headerBackTitle: 'Return Home',
    });
  }, [navigation]);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page two Screen</Text>
      <Button
        title="Go to page Three"
        onPress={() => navigation.navigate('PageThree')}
      />
    </View>
  );
};
export default PageTwo;
