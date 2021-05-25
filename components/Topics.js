import React, { useState } from 'react'
import Header from './Header'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
export default function Topics({ navigation }) {

    const [modules] = useState([
      {
          onicha: 'Start Here',
          title : 'Start Here',
          },
      {
          onicha: 'Nkowa Ife Omumu a',
          title : 'Introduction to the Course and its Navigation',
          },
      {
          onicha: "Mkpụlụ Abịdịị N'Asụsụ Ọnịcha",
          title : 'Alphabets in Onicha Dialect',
          },
      {
          onicha: "Ekene N'Asusu Onicha",
          title : "Greetings in Onitsha Dialect",
          },
      {
          onicha: "Nkọwa Onwe na Ezi n'ụnọ",
          title : "Introducing Oneself and Family",
          },
      {
          onicha: "Usolo Ọnụọgụgụ",
          title : "The Numbering System",
          },
      {
          onicha: "Usolo Ọnụọgụgụ",
          title : "Test Your Knowledge",
          },
    ])

    function onSelectTopic(moduleTitle){
        navigation.navigate('Study')
    }

  return (
    <View style={styles.container}>
      <Header headerText={navigation.getParam('onicha')}/>
      <FlatList
      keyExtractor={(item) => item.title}
      data={modules}
      renderItem={({item}) => (
        <TouchableOpacity onPress={()=>onSelectTopic(item.title)}>
            <View style={styles.card}>
            <Text style={styles.header}>
                {item.onicha}
            </Text>
            <Text style={styles.english}>
                {item.title}
            </Text>
            </View>
        </TouchableOpacity>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  header: {
      fontSize: 26,
  },

  english: {
      fontSize: 20,
  },

  card: {
      marginTop: 20,
      padding: 20,
      borderWidth: 0.2,
      borderRadius: 1,
  }
});
