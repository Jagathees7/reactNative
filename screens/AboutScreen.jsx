// screens/DetailsScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar'

const AboutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{width: '80%', marginBottom: 50}}>
            <Text style={styles.heading}>About e-audiometer</Text>
            <Text style={styles.para}>
            •  The e-audiometer website is intended to provide sound at different frequencies (250Hz, 500Hz, 1000Hz, 2000Hz, 4000Hz, 8000,Hz) and db HL levels (ranging from 0 dB HL to 80 dB HL) for hearing tests.
            </Text>
            <Text style={styles.para}>
            •  The website includes two buttons, "Yes" and "No," allowing users to indicate whether they can hear the aound or not.The sound level changes based on the user's response
            </Text>
            <Text style={styles.para}>
            •  If the users clicks "yes" at specific dB levels, the website provides two outputs. One output represents hearable and non-hearable points, and the other output categorizes the hearing level as "None," "Mild," "Moderate," or "Serve" based on the dB level.
            </Text>
            <Button
                title="Start"
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
