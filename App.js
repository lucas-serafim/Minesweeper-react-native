import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
   return (
      <View style={styles.container}>
         <StatusBar style="auto" />

         <Text>Iniciando o Mines!</Text>

         <Text>
            {params.getRowsAmount()}x{params.getColumnsAmount()}
         </Text>

         <Field />   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
