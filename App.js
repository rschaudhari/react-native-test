import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import MainStackNavigator from './src/navigation/AppNavigation'



export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <MainStackNavigator />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
