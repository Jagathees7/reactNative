// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import SampleScreen from './screens/SampleScreen';
import InstructionScreen from './screens/InstructionScreen';
import { View, Text, StyleSheet, Image } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: 'E-AUDIOMETER',
          headerStyle: {
            backgroundColor: '#46CAE7',
            height: 100
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (
            <React.Fragment>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', padding: 0 }}>E-AUDIOMETER</Text>
              <Image
                source={require('./assets/musicWave.png')}
                style={{ width: 100, height: 50, padding: 0  }}
                resizeMode="contain"
              />
            </React.Fragment>
          ),
        }} name="HOME" component={HomeScreen} />

        <Stack.Screen options={{
          title: 'E-AUDIOMETER',
          headerLeft: false,
          headerStyle: {
            backgroundColor: '#46CAE7',
            height: 100
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (
            <React.Fragment>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', padding: 0 }}>E-AUDIOMETER</Text>
              <Image
                source={require('./assets/musicWave.png')}
                style={{ width: 100, height: 50, padding: 0  }}
                resizeMode="contain"
              />
            </React.Fragment>
          ),
        }} name="ABOUT" component={AboutScreen} />

        <Stack.Screen options={{
          title: 'E-AUDIOMETER',
          headerLeft: false,
          headerStyle: {
            backgroundColor: '#46CAE7',
            height: 100
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (
            <React.Fragment>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', padding: 0 }}>E-AUDIOMETER</Text>
              <Image
                source={require('./assets/musicWave.png')}
                style={{ width: 100, height: 50, padding: 0  }}
                resizeMode="contain"
              />
            </React.Fragment>
          ),
        }} name="INSTRUCTION" component={InstructionScreen} />

<Stack.Screen options={{
          title: 'E-AUDIOMETER',
          headerLeft: false,
          headerStyle: {
            backgroundColor: '#46CAE7',
            height: 100
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (
            <React.Fragment>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', padding: 0 }}>E-AUDIOMETER</Text>
              <Image
                source={require('./assets/musicWave.png')}
                style={{ width: 100, height: 50, padding: 0  }}
                resizeMode="contain"
              />
            </React.Fragment>
          ),
        }} name="SAMPLE" component={SampleScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "red",
    color: 'blue',
  }
})

export default App;
