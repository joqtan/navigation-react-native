import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/AppTheme';
import {AuthContext} from '../context/AuthContext';

const ContactsScreen = () => {
  const {singIn, authState} = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin}}>
      <Text style={{...styles.title}}>Contact Screen</Text>
      {!authState.isLoggedIn && <Button title="singIn" onPress={singIn} />}
    </View>
  );
};

export default ContactsScreen;
