import { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Linking, Image, TextInput, Keyboard, Pressable, StatusBar, ScrollView, Dimensions } from 'react-native';

let height = Dimensions.get('window').height - 10; //full height

export default function Login({ navigation }) {

  const [errorCase, setError] = useState(" ")
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const storeData = () => { navigation.navigate('Pages') }

  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor='white'
        barStyle='dark-content' />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
        }}>

        <ScrollView style={styles.scroll}>
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
              secureTextEntry={true}
              textContentType='password'
              autoCompleteType='password'
              onChangeText={(change) => setPassword(change)}
            />

            <Text
              style={styles.error}>
              {errorCase}
            </Text>

            <View
              style={styles.loginButton}>
              <Pressable style={styles.button} onPress={storeData}>
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
            </View>

            <View
              flexDirection='row'
              style={{ marginBottom: 5 }}
            >
              <Text style={{ fontFamily: 'merriweather-Light', fontSize: 10 }}>New user? Register at: </Text>
              <Text
                style={{ color: 'blue', fontFamily: 'merriweather-Light', fontSize: 10 }}
                onPress={() => Linking.openURL('http://blendedlearningcenter.com')}>
                blendedlearningcenter.com
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View >
  );
}

const styles = StyleSheet.create({

  main: {
    flex: 1,
    height: '100%',
  },

  scroll: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    height: height
  },

  appName: {
    backgroundColor: '#9722A8',
    fontSize: 36,
    padding: 25,
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

  button: {
    backgroundColor: '#9722A8',
    borderRadius: 3,
  },

  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    padding: 15,
    fontFamily: 'merriweather-Regular'
  },

  input: {
    height: 40,
    margin: 15,
    width: 320,
    fontSize: 16,
    borderBottomWidth: 0.3,
    padding: 5,
    borderRadius: 4,
    borderColor: '#9722A8',
    marginBottom: 10,
    fontWeight: '300',
    fontFamily: 'merriweather-LightItalic'
  },

  blscLogo: {
    resizeMode: 'cover',
    marginBottom: 30,
  },

  error: {
    color: 'red',
    fontFamily: 'merriweather-Light',
    textAlign: 'center'
  }
});
