// screens/HomeScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, Image  } from 'react-native';
import NavBar from '../components/NavBar'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../assets/appLogo.jpeg')}
        style={{ width: 250, height: 250, marginBottom: 30  }}
        resizeMode="contain"
      />
      <NavBar navigation={navigation} /> 
    </View>
  );
};


export default HomeScreen;
