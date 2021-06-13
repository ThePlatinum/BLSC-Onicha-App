import React, { useState } from 'react';
import Header from './Header'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useEffect } from 'react';
import start from '../assets/imgs/start.png'
import introduction from '../assets/imgs/introduction.png'
import alphabet from '../assets/imgs/alphabet.png'
import greeting from '../assets/imgs/greeting.png'
import introductionemail from '../assets/imgs/Introduction-email.png'
import number from '../assets/imgs/numbers.png'
import test from '../assets/imgs/test.png'


export default function Login({ navigation }) {
  useEffect(
    () => {
      navigation.addListener('beforeRemove', (e)=> {
        console.log('Here')
        e.preventDefault()
      })
    },[navigation]
  )
  // Switch to Canvas APIs if possible
    const [modules] = useState([
        {
            onicha: 'Start Here',
            title : 'Start Here',
            module : 'StartHere',
            img: start
            },
        {
            onicha: 'Nkowa Ife Omumu a',
            title : 'Introduction to the Course and its Navigation',
            module : 'Module1',
            img: introduction
            },
        {
            onicha: "Mkpụlụ Abịdịị N'Asụsụ Ọnịcha",
            title : 'Alphabets in Onicha Dialect',
            module : 'Module2',
            img: alphabet
            },
        {
            onicha: "Ekene N'Asusu Onicha",
            title : "Greetings in Onitsha Dialect",
            module : 'Module3',
            img: greeting
            },
        {
            onicha: "Nkọwa Onwe na Ezi n'ụnọ",
            title : "Introducing Oneself and Family",
            module : 'Module4',
            img: introductionemail
            },
        {
            onicha: "Usolo Ọnụọgụgụ",
            title : "The Numbering System",
            module : 'Module5',
            img: number
            },
        {
            onicha: "Test Your Knowledge",
            title : "Test Your Knowledge",
            module : 'Test',
            img: test
            },
    ])

  return (
    <View style={styles.container}>
      <Header navigation = {navigation} headerText='Modules'/>
      <FlatList
      keyExtractor={(item) => item.title}
      data={modules}
      renderItem={({item}) => (
        <TouchableOpacity onPress={()=> {navigation.navigate('Topics', item)}}>
            <View 
            flexDirection='row'
            style={styles.card}
            >
            <Image
              style={styles.smallAvaters}
              source={item.img}
            />
            <View
            flex={1}
            style={styles.cardInner}
            >
              <Text style={styles.header}>
                  {item.onicha}
              </Text>
              <Text style={styles.english}>
                  {item.title}
              </Text>
            </View>
            </View>
        </TouchableOpacity>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
      fontSize: 22,
      color: '#9722A8',
      fontFamily: 'merriweather-Regular'
  },

  english: {
      fontSize: 16,
      color: '#8772BC',
      fontFamily: 'merriweather-Light'
  },

  card: {
    borderBottomWidth: 0.2,
    borderRadius: 1,
    paddingBottom: 10,
    marginTop: 10,
    padding: 5,
    borderColor: '#9722A8'
  },

  cardInner: {
    paddingEnd: 2,
    padding: 8,
    alignContent: 'center',
    alignSelf: 'center'
  },

  smallAvaters: {
    width: '22%',
    height: 85,
    alignSelf: 'center',
    marginStart: 5,
  }
});
