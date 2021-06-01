import React, { useState } from 'react';
import Header from './Header'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
export default function Login({ navigation }) {

  // Switch to Canvas APIs if possible
    const [modules] = useState([
        {
            onicha: 'Start Here',
            title : 'Start Here',
            module : 'StartHere'
            },
        {
            onicha: 'Nkowa Ife Omumu a',
            title : 'Introduction to the Course and its Navigation',
            module : 'Module1'
            },
        {
            onicha: "Mkpụlụ Abịdịị N'Asụsụ Ọnịcha",
            title : 'Alphabets in Onicha Dialect',
            module : 'Module2'
            },
        {
            onicha: "Ekene N'Asusu Onicha",
            title : "Greetings in Onitsha Dialect",
            module : 'Module3'
            },
        {
            onicha: "Nkọwa Onwe na Ezi n'ụnọ",
            title : "Introducing Oneself and Family",
            module : 'Module4'
            },
        {
            onicha: "Usolo Ọnụọgụgụ",
            title : "The Numbering System",
            module : 'Module5'
            },
        {
            onicha: "Usolo Ọnụọgụgụ",
            title : "Test Your Knowledge",
            module : 'Test'
            },
    ])

  return (
    <View style={styles.container}>
      <Header headerText='Modules'/>
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
              source={require('../assets/imgs/adaptive-icon.png')}
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
      fontSize: 28,
      //fontFamily: 'merriweather-bold'
  },

  english: {
      fontSize: 22,
      fontStyle: 'italic'
  },

  card: {
    borderWidth: 0.1,
    borderRadius: 1,
    marginTop: 15,
  },

  cardInner: {
    padding: 10,
  },

  smallAvaters: {
    width: '25%',
    height: '95%',
    alignSelf: 'center',
    marginStart: 5,
  }
});
