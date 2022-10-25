import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-navigation';
import { DrawerItems } from 'react-navigation-drawer';
import * as firebase from 'firebase'

export default function customDrawer (props) {

  const [studentName, setStudentName] = useState('Student')
  const [studentMail, setStudentMail] = useState('')

  const [instructorName, setInstructorName] = useState('Instructor')
  const [instructorPhone, setInstructorPhone] = useState([
    {phone : '', number: '1'},
    {phone : '07014293952', number : '2'}
  ])
  
  const [instructorMail, setInstructorMail] = useState('instructormail@blendedlearningcenter.com')

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //const photoURL = user.photoURL;
      //const emailVerified = user.emailVerified;
      //const uid = user.uid;
      //setStudentName(user.displayName) ;
      setStudentMail(user.email)
      // ...
    }
  });

  return (
    <View  style={styles.container}>
      <View style={styles.drawHead}>
        <Text style={styles.name}>
          {studentName}
        </Text>
        <Text style={styles.mail}>
          {studentMail}
        </Text>
      </View>

      <View style={styles.instructor}>
        <Text style={styles.iname}>
          {instructorName}
        </Text>
        <FlatList
        keyExtractor = {(item) => item.number}
        data = {instructorPhone}
        renderItem = {({item}) => (
          <Text style={styles.iphone}>
          {item.phone}
          </Text>
        )
        } />
        <Text style={styles.imail}>
          {instructorMail}
        </Text>
      </View>

      <ScrollView style={styles.scroll}>
        <SafeAreaView>
          <DrawerItems {...props} />
        </SafeAreaView>
      </ScrollView>

      <View >
        <Image
        style={styles.footLogo}
        source={require('../assets/imgs/blsclogo.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display :'flex'
  },

  drawHead : {
    display: 'flex',
    height: 180,
    backgroundColor: '#9722A8',
    marginBottom: 20,
    paddingStart: 20,
    paddingTop: '22%',
  },

  name : {
    fontSize: 24,
    fontFamily: 'merriweather-Regular',
    color: 'white'
  },

  mail :{
    fontSize: 12,
    fontFamily: 'merriweather-Light',
    color: 'white'
  },

  instructor: {
    paddingStart : 20,
    marginBottom: 20,
  },

  iname : {
    fontSize: 24,
    fontFamily: 'merriweather-Regular',
    color: '#9722A8'
  },

  imail :{
    fontSize: 12,
    paddingTop: 4,
    fontFamily: 'merriweather-Light',
    color: '#9722A8'
  },

  iphone : {
    paddingTop: 4,
    fontSize: 18,
    fontFamily: 'merriweather-Light',
    color: '#9722A8'
  },

  scroll : {
    display: 'flex',
    borderTopWidth : 0.2,
    borderBottomWidth : 0.2,
    borderRadius: 1,
    borderColor : 'black',
    paddingStart: 4,
  },

  footLogo : {
    width : '45%',
    height : 40,
    marginStart : 20,
    marginTop : 5,
    alignSelf : 'flex-start'
  }
});
