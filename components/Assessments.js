import React from 'react';
import { Linking, StyleSheet, Text, View} from 'react-native';
import Header from './Header';

export default function Assessments({navigation}) {

  const note = "Now that you have gone through the resourses, \n \n 'Test Your Knowlegde' \n \n by taking the Assesements on"
    return (
        <View style={styles.mainContainer}>
        <Header navigation={navigation} headerText=''/>
        <View style={styles.main}>
            <Text style={styles.great}>
                Great!
            </Text>
            <Text style={styles.note}>
                {note}
            </Text>
            <Text 
                style={{color: 'blue' , fontFamily: 'merriweather-Light', fontSize : 40, marginBottom : 50, textAlign: 'center'}}
                onPress={() => Linking.openURL("https://canvas.instructure.com")}>
                    Canvas
            </Text>
            <Text style={styles.noteBoard}>
                Assesements are currently available only on the canvas account
            </Text>
          </View>
        </View>
    )
}

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 30,
  },

  noteBoard: {
    fontSize: 14,
    margin: 5,
    color: '#8772BC',
    fontFamily: 'merriweather-LightItalic',
    textAlign: 'center'
  },

  great: {
    fontSize: 60,
    color: '#9722A8',
    marginBottom: 90,
    fontFamily: 'merriweather-Regular',
    justifyContent: 'center',
    textAlign: 'center'
  },

  note: {
    fontSize: 20,
    marginBottom: 30,
    marginTop: 10,
    fontFamily: 'merriweather-Light',
    textAlign: 'center',
    fontWeight: '300'
  }
});