import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import {
  Image,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from '../theme/AppTheme';
// import {createStackNavigator} from '@react-navigation/stack';

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
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
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
            onPress={() => navigation.navigate('StackNavigator')}>
            Navigation
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.DrawerButton}>
          <Text
            style={styles.DrawerText}
            onPress={() => navigation.navigate('SettingsScreen')}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
