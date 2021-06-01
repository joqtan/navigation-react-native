import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/AppTheme';
import {AuthContext} from '../context/AuthContext';

const AlbumsScreen = () => {
  const {authState, logOut} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums Screen</Text>
      {authState.isLoggedIn && <Button title="Logout" onPress={logOut} />}
    </View>
  );
};

export default AlbumsScreen;
