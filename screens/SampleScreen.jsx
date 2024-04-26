// screens/DetailsScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar'

const AboutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{width: '80%', marginBottom: 50}}>
            <Text style={styles.heading}> E-audiometer</Text>
            
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 20 }}>
            <Button
                title="Yes"
            />
            <Button
                title="No"
            />
            </View>
            <Button
                title="Start Now"
                onPress={() => navigation.goBack()}
            />
        </View>
      <NavBar navigation={navigation} /> 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center'
    },
    para: {
        // paddingTop: 12,
        paddingBottom: 30
    }
  });

export default AboutScreen;
