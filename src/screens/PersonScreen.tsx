import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigators/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Person'> {}
// ? interface RouteParams {
// ?  id: number;
// ? name: string;
// ? }

const PersonScreen = ({route, navigation}: Props) => {
  // ! const params = route!.params;
  // ?  const params = route.params as RouteParams;
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({title: params.name});
  }, [navigation, params]);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonScreen;
