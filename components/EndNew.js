import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import Header from './Header';

export default function Assessments({navigation}) {
    const note = "\n \n 'Test Your Knowlegde' \n \n by taking the Assesements on"

    return (
      <View style={styles.mainContainer}>
      <Header navigation={navigation} headerText=''/>
      <View style={styles.main}>
            <Text style={styles.great}>
                Great!
            </Text>
            <Text style={styles.note}>
                You are done with Module {navigation.getParam('moduleName')} 

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

            <Pressable onPress={()=>navigation.navigate('Modules')}>
              <Text style={styles.button}>Continue</Text>
            </Pressable>
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
    margin: 30
  },

  great: {
    fontSize: 60,
    color: '#9722A8',
    marginBottom: 90,
    fontFamily: 'merriweather-Regular',
    textAlign: 'center'
  },

  note: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'merriweather-Light',
    textAlign: 'center'
  },

  button: {
    fontSize: 30,
    padding: 10,
    borderColor: '#9722A8',
    backgroundColor: '#9722A8',
    color: 'white',
    fontFamily: 'merriweather-Light',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    
  },

  noteBoard: {
    fontSize: 14,
    marginBottom: 20,
    color: '#8772BC',
    fontFamily: 'merriweather-LightItalic',
    textAlign: 'center'
  }
});