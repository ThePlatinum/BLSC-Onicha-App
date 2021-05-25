import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Header from './Header'

export default function Study() {

  const lectureTitle = 'Lecture Title'
  const header = 'Main Point to talk about in the topic'
  const subHeader = 'A brief sub point to talk about in the topic, if it is empty can be left as empty'
  const paragraph = 'The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here The Story will be here '

  return (
    <View style={styles.mainContainer}>
      <Header headerText={lectureTitle}/>
      <View style={styles.container}>
        <View style={styles.video}>
          {/**/}
        </View>

        <ScrollView>

          <Text style={styles.header}>
            {header}
          </Text>

          <Text style={styles.subHeader}>
            {subHeader}
          </Text>

          <Text style={styles.paragraph}>
            {paragraph}
          </Text>

          <View
          style={styles.buttonV}
          >

            <View style={styles.button}>
            <Button
              color='#9722A8'
              title='Previous'
            />
            </View>

            <View style={styles.button}>
            <Button
              color='#9722A8'
              title='Next'
            />
            </View>

          </View>

        </ScrollView>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  header: {
    color: '#9722A8',
    fontSize: 26,
    margin: 10
  },

  subHeader: {
    fontSize: 22,
    margin: 10
  },

  paragraph: {
    flex: 1,
    fontSize: 18,
    margin: 10
  },

  buttonV: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },

  button: {
    width: '40%'
  },

  video: {
    height: '40%',
    backgroundColor: '#ccc',
  }

});