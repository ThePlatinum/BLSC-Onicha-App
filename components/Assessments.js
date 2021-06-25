import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Assessments() {

  const note = "Now that you have gone through the resourses, \n 'Test Your Knowlegde' by taking the Assesements on:"
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.great}>
                Great!
            </Text>
            <Text style={styles.note}>
                {note}
            </Text>
            <Text 
                style={{color: 'blue' , fontFamily: 'merriweather-Light', fontSize : 20, marginBottom : 50}}
                onPress={() => Linking.openURL("https://canvas.instructure.com")}>
                    Canvas
            </Text>
            <Text style={styles.note}>
                Assesements are currently only available on the canvas account
            </Text>
            
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
    fontFamily: 'merriweather-Regular'
  }
});