import React from 'react';
import { Pressable, StyleSheet, View} from 'react-native';

export default function Assessments(props, {navigation}) {
    const note = "\n \n 'Test Your Knowlegde' by taking the Assesements on:"

    const continues = () => {
      navigation.navigate('Modules')
    }

    return (

        <View style={styles.mainContainer}>
            <Text style={styles.great}>
                Great!
            </Text>
            <Text style={styles.note}>
                You are done with Module {props.moduleName} 

                {note}
            </Text>
            <Text 
                style={{color: 'blue' , fontFamily: 'merriweather-Light', fontSize : 20, marginBottom : 50}}
                onPress={() => Linking.openURL("https://canvas.instructure.com")}>
                    Canvas
            </Text>
            <Text style={styles.noteBoard}>
                Assesements are currently only available on the canvas account
            </Text>

            <Pressable onPress={continues}>
              <Text style={styles.button}>Continue</Text>
            </Pressable>
            
        </View>
    )
}

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  note:{
    fontSize: 12,
    margin: 5,
    color: '#8772BC',
    fontFamily: 'merriweather-LightItalic'
  },

  great:{
    fontSize: 30,
    margin: 10,
    color: '#9722A8',
    marginBottom: 70,
    fontFamily: 'merriweather-Regular'
  },

  note: {
    fontSize: 16,
    margin: 10,
    marginBottom: 10,
    marginTop: 10,
    color: '#8772BC',
    fontFamily: 'merriweather-Light'
  },

  button: {
    fontSize: 30,
    padding: 15,
    color: '#9722A8',
    fontFamily: 'merriweather-Regular',
    borderRadius: 2,
    borderWidth: 1
  },

  noteBoard: {
    fontSize: 12,
    margin: 10,
    marginBottom: 10,
    marginTop: 10,
    color: '#8772BC',
    fontFamily: 'merriweather-LightItalic'
  }
});