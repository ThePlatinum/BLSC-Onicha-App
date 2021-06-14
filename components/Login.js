import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Linking, Image, TextInput, Keyboard, Alert, Pressable, StatusBar } from 'react-native';

export default function Login({ navigation }) {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('LoggedIn', 'true').then(
        navigation.navigate('Modules')
      )
    } catch (e) {
      console.log(e)
      navigation.navigate('Login')
    }
  }

  return (
    <View style={styles.main}>
      <StatusBar 
      backgroundColor = 'white'
      barStyle='dark-content' />
      <TouchableWithoutFeedback
        onPress={() =>{
          Keyboard.dismiss()
        }}>

        <View style={styles.container}>
          <Text style={styles.appName}>
            Igbo Language Onicha Ado Dialect
          </Text>

          <Image
            style={styles.blscLogo}
            source={require('../assets/imgs/blsclogo.png')}
            onPress={() => Linking.openURL('http://blendedlearningcenter.com')}
          />
          
          <TextInput
            style={styles.input}
            autoCompleteType='email'
            placeholder='username@blendedlearningcenter.com'
            onChangeText={(change) => setMail(change)}
          />

          <TextInput
            style={styles.input}
            placeholder='password'
            typ='password'
            textContentType='password'
            autoCompleteType= 'password'
            onChangeText={(change) => setPassword(change)}
          />

          <View
            style={styles.loginButton}>
            <Pressable style={styles.button} onPress={storeData}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>

          <View
          flexDirection='row'
          style={{marginBottom: 5}}
          >
            <Text style={{fontFamily: 'merriweather-Light', fontSize : 10}}>New user? Register at: </Text>
                <Text 
                style={{color: 'blue' , fontFamily: 'merriweather-Light', fontSize : 10}}
                onPress={() => Linking.openURL('http://blendedlearningcenter.com')}>
                    blendedlearningcenter.com
                </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  
  main: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },

  appName: {
    backgroundColor: '#9722A8',
    fontSize: 36,
    paddingBottom: 25,
    padding: 10,
    paddingTop: 25,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 80,
    fontFamily: 'merriweather-Regular'
  },

  loginButton: {
    marginTop: 20,
    width: 200,
    marginBottom: 20,
  },

  button : {
    backgroundColor : '#9722A8',
    borderRadius: 3,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign : 'center',
    padding: 7,
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: 'merriweather-Light'
  },

  input: {
    height: 40,
    margin: 15,
    width: 320,
    fontSize: 16,
    borderBottomWidth: 0.3,
    padding: 5,
    borderRadius: 4,
    borderColor:'#9722A8',
    marginBottom: 10,
    fontWeight: '300',
    fontFamily: 'merriweather-LightItalic'
  },

  blscLogo: {
    resizeMode: 'cover',
    marginBottom: 30,
  }
});
