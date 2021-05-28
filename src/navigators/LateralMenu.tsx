import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';

import {
  Image,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from '../theme/AppTheme';
// import {createStackNavigator} from '@react-navigation/stack';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();
// const SettingsStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
//     </Stack.Navigator>
//   );
// };

export const LateralMenu = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 424 ? 'permanent' : 'front'}
      drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/*Avatar content*/}
      <View style={styles.DrawerAvatar}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* navigation items */}
      <View style={styles.DrawerContainer}>
        <TouchableOpacity style={styles.DrawerButton}>
          <Text
            style={styles.DrawerText}
            onPress={() => navigation.navigate('Tabs')}>
            <Icon name="list" size={20} color="purple" />
            Navigation
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.DrawerButton}>
          <Text
            style={styles.DrawerText}
            onPress={() => navigation.navigate('SettingsScreen')}>
            <Icon name="settings" size={20} color="purple" />
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
