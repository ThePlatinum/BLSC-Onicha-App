import React from 'react'
import Header from './Header'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Topics({ navigation }) {

    const StartHere = [
        {
            onichaTopic: 'Nnọọ na Ọmụmụ ịfe nke Asụsụ Ọnịcha',
            topic : 'Welcome to the Onicha Course',
            id : 1
            },
        {
            onichaTopic: 'Navigating the Course',
            topic : 'Navigating the Course',
            id : 2
            },
        {
            onichaTopic: 'Start Here 1',
            topic : 'Start Here',
            id : 3
            },
        {
            onichaTopic: 'Start Here 2',
            topic : 'Start Here',
            id : 4
            },
        {
            onichaTopic: 'Start Here 3',
            topic : 'Start Here',
            id : 5
            },
        {
            onichaTopic: 'Start Here',
            topic : 'Start Here',
            id : 6
            }
    ]

    const Module1 = [
        {
            onichaTopic: 'Nkowa Ife Omumu a',
            topic : 'Introduction to the Course',
            id : 1
            },
        {
            onichaTopic: 'Ebummobi Omumu Ife',
            topic : 'Lesson Objectives',
            id : 2
            },
        {
            onichaTopic: 'Start Here 1',
            topic : 'Start Here',
            id : 3
            },
        {
            onichaTopic: 'Start Here 2',
            topic : 'Start Here',
            id : 4
            },
        {
            onichaTopic: 'Start Here 3',
            topic : 'Start Here',
            id : 5
            },
        {
            onichaTopic: 'Start Here',
            topic : 'Start Here',
            id : 6
            }
    ]

    const which = navigation.getParam('module')
    let data = []

    switch (which) {
        case 'StartHere':
            data = StartHere
            break;
    
        case 'Module1':
            data = Module1
            break;

        default:
            break;
    }

  return (
    <View style={styles.container}>
      <Header headerText={navigation.getParam('onicha')}/>

      <FlatList
      keyExtractor = {(item) => item.onichaTopic}
      data = { data }
      renderItem={({item}) => (
        <TouchableOpacity onPress={()=> navigation.navigate('Study', item) }>
            <View style={styles.card}>
                <Text style={styles.header}>
                    {item.onichaTopic}
                </Text>
                <Text style={styles.english}>
                    {item.topic}
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
