import { Video } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Header from './Header'

const One = {
  onichaTopic : 'Nnọọ na Ọmụmụ ịfe nke Asụsụ Ọnịcha',
  topic : 'Welcome to the Onicha Course',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Two = {
onichaTopic : 'Nnọọ na Ọmụmụ ịfe nke Asụsụ Ọnịcha',
topic : 'Welcome to the Onicha Course',
header : "Specific Steps to Get You Started in the Course in 2",
note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
videoUrl : "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Three = {
  onichaTopic : 'Nnọọ na Ọmụmụ ịfe nke Asụsụ Ọnịcha',
  topic : 'Welcome to the Onicha Course',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Four = {
onichaTopic : 'Nnọọ na Ọmụmụ ịfe nke Asụsụ Ọnịcha',
topic : 'Welcome to the Onicha Course',
header : "Specific Steps to Get You Started in the Course in 222",
note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
videoUrl : "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Five = {
  onichaTopic : 'Nnọọ na Ọmụmụ ịfe nke Asụsụ Ọnịcha',
  topic : 'Welcome to the Onicha Course',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Six = {
onichaTopic : 'Nnọọ na Ọmụmụ ịfe nke Asụsụ Ọnịcha',
topic : 'Welcome to the Onicha Course',
header : "Specific Steps to Get You Started in the Course in 222",
note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
videoUrl : "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

export default function Study( {navigation} ) {

const [lessonId, setId] = useState(navigation.getParam('id'))

  const [state, setState] = useState([{
    header: '',    subHeader : '',    paragraph : '',
    lectureTitle : '',    videoUrl : ''
  }]);

  const next = () => {
    setId(lessonId + 1)
    studyData(lessonId)
  }

  const previous = () => {
    setId(lessonId - 1)
    studyData(lessonId)
  }

  const setValue = (arr) =>{
    setState( {      header : arr.header,
      subHeader : arr.subHeader,      paragraph : arr.note,
      lectureTitle : arr.onichaTopic,      videoUrl : arr.videoUrl
    })
  }

  const studyData = (lesson) => {
    switch (lesson) {
      case 1:
        setValue(One)
        break;

      case 2:
        setValue(Two)
        break;

      case 3:
        setValue(Three)
        break;

      case 4:
        setValue(Four)
        break;

      case 5:
        setValue(Five)
        break;

      case 6:
        setValue(Six)
        break;
      
      default:
          break;
    }
  }

  useEffect( () => {    studyData(lessonId) }, [] )

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} headerText={state.lectureTitle}/>
      <View style={styles.container}>
        <View style={styles.video}>
          <Video
            source={{uri: state.videoUrl}}
            shouldPlay
            useNativeControls
            style={styles.backgroundVideo} />
        </View>

        <ScrollView>
          <Text style={styles.header}>
            {state.header}
          </Text>

          <Text style={styles.subHeader}>
            {state.subHeader}
          </Text>

          <Text style={styles.paragraph}>
            {state.paragraph}
          </Text>

          <View
          style={styles.buttonV}
          >
            <Pressable style={styles.button} onPress={previous}>
              <Text style={styles.buttonText}>Previous</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={next}>
              <Text style={styles.buttonText}>Next</Text>
            </Pressable>
          </View>

        </ScrollView>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  header: {
    color: '#9722A8',
    fontSize: 26,
    margin: 10,
    fontFamily: 'merriweather-Regular'
  },

  subHeader: {
    fontSize: 22,
    margin: 10,
    color: '#8772BC',
    fontFamily: 'merriweather-LightItalic'
  },

  paragraph: {
    flex: 1,
    fontSize: 18,
    margin: 10,
    textAlign: 'justify',
    fontFamily: 'merriweather-Light'
  },

  buttonV: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },

  button: {
    width: '35%',
    borderColor: '#9722A8',
    borderWidth: 0.5,
  },

  buttonText: {
    color: '#9722A8',
    textAlign: 'center',
    fontSize : 16,
    padding: 7,
    fontFamily: 'merriweather-Light'
  },

  video: {
    height: '35%',
    backgroundColor: '#ccc',
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});