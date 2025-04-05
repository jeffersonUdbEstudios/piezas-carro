import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PartsProvider } from  '../../components/PartsContext';
import HomeScreen from '../../components/HomeScreen';

export default function App() {
  return (
    <PartsProvider>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </PartsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});