import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';

export function CustomDrawer(props) {

  const [studentName, setStudentName] = useState('Emmanel Adesina')
  const [studentMail, setStudentMail] = useState('platinumemirate@gmail.com')

  const [instructorName, setInstructorName] = useState('Instructor')
  const [instructorPhone, setInstructorPhone] = useState([
    { phone: '', number: '1' },
    { phone: '07014293952', number: '2' }
  ])

  const [instructorMail, setInstructorMail] = useState('instructormail@blendedlearningcenter.com')

  return (
    <View style={styles.container}>
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
          keyExtractor={(item) => item.number}
          data={instructorPhone}
          renderItem={({ item }) => (
            <Text style={styles.iphone}>
              {item.phone}
            </Text>
          )
          } />
        <Text style={styles.imail}>
          {instructorMail}
        </Text>
      </View>

      <DrawerContentScrollView  {...props}>
        <DrawerItem label={'Study Modules'} onPress={()=> props.navigation.navigate('Modules')} />
        {/* <DrawerItem label={'Topics'}/>
        <DrawerItem label={'Study'}/>
        <DrawerItem label={'Assessments'}/> */}
      </DrawerContentScrollView>
      
      <Image
          style={styles.footLogo}
          source={require('../assets/imgs/blsclogo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  drawHead: {
    display: 'flex',
    height: 180,
    backgroundColor: '#9722A8',
    marginBottom: 20,
    paddingStart: 20,
    paddingTop: '22%',
  },

  name: {
    fontSize: 24,
    fontFamily: 'merriweather-Regular',
    color: 'white'
  },

  mail: {
    fontSize: 12,
    fontFamily: 'merriweather-Light',
    color: 'white'
  },

  instructor: {
    paddingStart: 20,
    marginBottom: 20,
  },

  iname: {
    fontSize: 24,
    fontFamily: 'merriweather-Regular',
    color: '#9722A8'
  },

  imail: {
    fontSize: 12,
    paddingTop: 4,
    fontFamily: 'merriweather-Light',
    color: '#9722A8'
  },

  iphone: {
    paddingTop: 4,
    fontSize: 18,
    fontFamily: 'merriweather-Light',
    color: '#9722A8'
  },

  scroll: {
    display: 'flex',
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderRadius: 1,
    borderColor: 'black',
    paddingStart: 4,
  },

  footLogo: {
    width: '40%',
    height: 40,
    marginStart: 20,
    marginTop: 15,
    marginBottom: 15,
    alignSelf: 'flex-start'
  }
});
