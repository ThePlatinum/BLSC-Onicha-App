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

    //6

    const Module1 = [
        {
            onichaTopic: 'Nkowa Ife Omumu a',
            topic : 'Introduction to the Course',
            id : 7
            },
        {
            onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
            topic : 'Module Objectives',
            id : 8
            },
        {
            onichaTopic: 'Course Guildlines',
            topic : 'Course Guildlines',
            id : 9
            },
        {
            onichaTopic: 'Assessments and Grades',
            topic : 'Assessments and Grades',
            id : 10
            },
        {
            onichaTopic: 'Using the Igbo Keyboard on Windows OS',
            topic : 'Using the Igbo Keyboard on Windows OS',
            id : 11
            },
        {
            onichaTopic: 'Using the Igbo Keyboard on Mobile Devices',
            topic : 'Using the Igbo Keyboard on Mobile Devices',
            id : 12
            }
    ]

    //13

    const Module2 = [
        {
            onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
            topic : 'Module Objectives',
            id : 14
            },
        {
            onichaTopic: "Nkowa - Mkpụlụabịdịị n'asụsụ Ọnịcha",
            topic : 'Introduction - Onicha Alphabets',
            id : 15
            },
        {
            onichaTopic: 'Mkpụlụabịdịị A - F',
            topic : 'Letters A - F',
            id : 16
            },
        {
            onichaTopic: 'Mkpụlụabịdịị G - H',
            topic : 'Letters G - H',
            id : 17
            },
        {
            onichaTopic: 'Mkpụlụabịdịị I - KW',
            topic : 'Letters I - K',
            id : 18
            },
        {
            onichaTopic: 'Mkpụlụabịdịị L - NY',
            topic : 'Letters L - N',
            id : 19
            },
        {
            onichaTopic: 'Mkpụlụabịdịị O - T',
            topic : 'Letters O - T',
            id : 20
            },
        {
            onichaTopic: 'Mkpụlụabịdịị U - Z',
            topic : 'Letters U - Z',
            id : 21
            }
    ]

    //22

    const Module3 = [
        {
            onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
            topic : 'Module Objectives',
            id : 23
            },
        {
            onichaTopic: 'Introduction - Greetings in Onicha Language',
            topic : 'Introduction - Greetings in Onicha Language',
            id : 24
            },
        {
            onichaTopic: 'Greetings by Time',
            topic : 'Greetings by Time',
            id : 25
            },
        {
            onichaTopic: 'Casual Greetings',
            topic : 'Casual Greetings',
            id : 26
            }
    ]

    //27

    const Module4 = [
        {
            onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
            topic : 'Module Objectives',
            id : 28
            },
        {
            onichaTopic: "Ikọwa Onwe na Ezi n'ụnọ",
            topic : 'Introducing Oneself and Family',
            id : 29
            },
        {
            onichaTopic: 'Nnọchionwe',
            topic : 'Personal Pronouns',
            id : 30
            },
        {
            onichaTopic: "Ezi n'ụnọ",
            topic : 'The Family',
            id : 31
            },
        {
            onichaTopic: "Ụfọdụ Ahịlịokwu Eji Akọwa Onwe",
            topic : 'Simple Sentences in Introduction of Oneself',
            id : 32
            }
    ]

    //33

    const Module5 = [
        {
            onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
            topic : 'Module Objectives',
            id : 34
        },
        {
            onichaTopic: "Nkọwa - Ọnụọgụgụ n'asụsụ Ọnịcha",
            topic : 'Introduction - Numbers in Onitsha Dialect',
            id : 35
        },
        {
            onichaTopic: "Gụọ site na ofu wee lue ili ibụa",
            topic : 'Counting from 1 to 20',
            id : 36
        },
        {
            onichaTopic: "Ọkwa na Usolo Ịfe",
            topic : 'Ranking and Order of Things',
            id : 37
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
        
        case 'Module4':
            data = Module4
            break;
    
        case 'Module5':
            data = Module5
            break;
        default:
            break;
    }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} headerText={navigation.getParam('onicha')}/>

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
      color: '#9722A8',
      fontFamily: 'merriweather-Regular'
  },

  english: {
      fontSize: 18,
      color: '#8772BC',
      fontFamily: 'merriweather-Light'
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
