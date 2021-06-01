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
            onichaTopic: 'Meet the Instructor',
            topic : 'Meet the Instructor',
            id : 3
            },
        {
            onichaTopic: 'Accessibility of Course Materials',
            topic : 'Accessibility of Course Materials',
            id : 4
            },
        {
            onichaTopic: 'Requirements',
            topic : 'Requirements',
            id : 5
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
            topic : 'Module Objectives',
            id : 2
            },
        {
            onichaTopic: 'Course Guildlines',
            topic : 'Course Guildlines',
            id : 3
            },
        {
            onichaTopic: 'Assessments and Grades',
            topic : 'Assessments and Grades',
            id : 4
            },
        {
            onichaTopic: 'Using the Igbo Keyboard on Windows OS',
            topic : 'Using the Igbo Keyboard on Windows OS',
            id : 5
            },
        {
            onichaTopic: 'Using the Igbo Keyboard on Mobile Devices',
            topic : 'Using the Igbo Keyboard on Mobile Devices',
            id : 6
            }
    ]


    const Module2 = [
        {
            onichaTopic: 'Ebummobi Omumu Ife',
            topic : 'Module Objectives',
            id : 1
            },
        {
            onichaTopic: "Nkowa - Mkpụlụabịdịị n'asụsụ Ọnịcha",
            topic : 'Introduction - Onicha Alphabets',
            id : 2
            },
        {
            onichaTopic: 'Mkpụlụabịdịị A - F',
            topic : 'Letters A - F',
            id : 3
            },
        {
            onichaTopic: 'Mkpụlụabịdịị G - H',
            topic : 'Letters G - H',
            id : 4
            },
        {
            onichaTopic: 'Mkpụlụabịdịị I - KW',
            topic : 'Letters I - K',
            id : 5
            },
        {
            onichaTopic: 'Mkpụlụabịdịị L - NY',
            topic : 'Letters L - N',
            id : 6
            },
        {
            onichaTopic: 'Mkpụlụabịdịị O - T',
            topic : 'Letters O - T',
            id : 7
            },
        {
            onichaTopic: 'Mkpụlụabịdịị U - Z',
            topic : 'Letters U - Z',
            id : 8
            }
    ]

    const Module3 = [
        {
            onichaTopic: 'Ebummobi Omumu Ife',
            topic : 'Module Objectives',
            id : 1
            },
        {
            onichaTopic: 'Ebummobi Omumu Ife',
            topic : 'Module Objectives',
            id : 2
            },
        {
            onichaTopic: 'Course Guildlines',
            topic : 'Course Guildlines',
            id : 3
            },
        {
            onichaTopic: 'Assessments and Grades',
            topic : 'Assessments and Grades',
            id : 4
            },
        {
            onichaTopic: 'Using the Igbo Keyboard on Windows OS',
            topic : 'Using the Igbo Keyboard on Windows OS',
            id : 5
            },
        {
            onichaTopic: 'Using the Igbo Keyboard on Mobile Devices',
            topic : 'Using the Igbo Keyboard on Mobile Devices',
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

        case 'Module2':
            data = Module2
            break;
    
        case 'Module3':
            data = Module3
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
      color: '#9722A8'
  },

  english: {
      fontSize: 20,
      color: '#8772BC'
  },

  card: {
      marginTop: 15,
      padding: 20,
      borderBottomWidth: 0.2,
      borderRadius: 1,
      marginTop: 10,
      borderColor: '#9722A8'
  }
});
