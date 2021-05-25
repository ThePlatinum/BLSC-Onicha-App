import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Linking, Image, Button, TextInput, Keyboard, Alert } from 'react-native';


export default function Login({ navigation }) {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  return (
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
            <Button
                title='Login'
                color='#9722A8'
                onPress={() =>{
                  navigation.navigate('Modules')
                }}
            />
          </View>

          <View
          flexDirection='row'
          >
            <Text >New user? Register at: </Text>
                <Text 
                style={{color: 'blue' }}
                onPress={() => Linking.openURL('http://blendedlearningcenter.com')}>
                    blendedlearningcenter.com
                </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 38,
    paddingBottom: 25,
    paddingTop: 25,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 110,
  },

  loginButton: {
    marginTop: 20,
    width: 200,
    marginBottom: 20,
  },

  input: {
    height: 45,
    margin: 15,
    width: 320,
    fontSize: 20,
    borderBottomWidth: 0.3,
    padding: 5,
    borderRadius: 4,
    borderColor:'#9722A8',
    marginBottom: 10,
  },

  blscLogo: {
    resizeMode: 'cover',
    marginBottom: 30,
  }
});
