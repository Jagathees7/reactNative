// screens/DetailsScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../components/NavBar'

const InstructionScreen = ({ navigation }) => {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView style={{padding: 30, marginBottom: 90}} contentContainerStyle={styles.scrollView}>
        <View style={{ marginBottom: 50}}>
            <Text style={styles.heading}>How to use?</Text>
            <Text style={styles.para}>
            •  Click on the Start button below to get started.
            </Text>
            <Text style={styles.para}>
            •  You can spot play button on the screen. Once you click the play button, audio will play on the background.
            </Text>
            <Text style={styles.para}>
            •  Audio will keep increasing in dB upon each levels.
            </Text>
            <Text style={styles.para}>
            •  Carefully listen to the audio and submit your response by clicking on the Yes or No button that will be present below the audio for each levels.
            </Text>
            <Text style={styles.para}>
            •  You will receive the result page after the last level.
            </Text>
            <View style={{ backgroundColor: 'rgba(70, 202, 231, 0.3)', padding: 20, marginBottom: 25, borderRadius: 10 }}>
                <Text style={styles.heading}>Follow these before starting</Text>
                <Text style={styles.para}>
                •  Plugin to earphones for accurate results
                </Text>
                <Text style={styles.para}>
                •  Do not distribute your volume button while I ongoing the test
                </Text>
            </View>
            <Button
                title="Start"
                onPress={() => navigation.goBack()}
            />
        </View>
        </ScrollView>
      <NavBar navigation={navigation} /> 
    </View> 
    
  );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
      },    
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
        paddingBottom: 25
    }
  });

export default InstructionScreen;
