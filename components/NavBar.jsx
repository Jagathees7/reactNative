import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NavBar = (props) => {
    const getAction = (props, value="HOME") => {
        props.navigation.navigate(value)
    }
  return (
    <View style={styles.footer}>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => getAction(props, 'HOME')}>
          <Image
            source={require('../assets/icons/home.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => getAction(props, 'ABOUT')}>
          <Image
            source={require('../assets/icons/information.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => getAction(props, 'INSTRUCTION')}>
          <Image
            source={require('../assets/icons/symbols.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text>Instruction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => getAction(props, 'SAMPLE')}>
          <Image
            source={require('../assets/icons/volume.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text>Sample</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    // Add styles for footer if needed
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#46CAE7',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  tabItem: {
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default NavBar;
