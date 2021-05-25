import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View} from 'react-native';
export default function Header({headerText}) {

  return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor='#9722A8'/>
        {/* Image for each Module */}
        <Text style={styles.header}>{headerText}</Text>
        {/* Check Box for Completion */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9722A8',
    justifyContent: 'flex-end',
    alignContent: 'center',
    padding: 5
  },

  header: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center'
  }
});
