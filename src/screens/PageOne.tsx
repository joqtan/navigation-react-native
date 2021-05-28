import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/AppTheme';

interface Props extends DrawerScreenProps<any, any> {}
const PageOne = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 15}}>
          <Icon
            name="menu"
            size={45}
            color="purple"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page one Screen</Text>
      <Button
        title="Go to page two"
        onPress={() => navigation.navigate('PageTwo')}
      />
      <Text style={styles.title}>Navigate with arguments</Text>
      <View style={styles.fdRow}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.buttonLcolor1}
          onPress={() => navigation.navigate('Person', {id: 1, name: 'Peter'})}>
          <Text style={styles.buttonLText}>Peter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.buttonLcolor2}
          onPress={() => navigation.navigate('Person', {id: 2, name: 'Jhon'})}>
          <Text style={styles.buttonLText}>Jhon</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PageOne;
