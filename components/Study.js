import { useRoute } from '@react-navigation/native';
import { Video } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Header from './Header'

const One = {
  onichaTopic: 'Nnọọ na Ọmụmụ ịfe nke Asụsụ Ọnịcha',
  topic: 'Welcome to the Onicha Course',
  header: "Specific Steps to Get You Started in the Course",
  note: "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader: "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl: "https://youtu.be/Cbovmd1OdbE?list=PL_ieQ5Y6wtDAWo86yO5JhlzzfXQbPJHVq"
}

const Two = {
  onichaTopic: 'Navigating the Course',
  topic: 'Navigating the Course',
  header: "Specific Steps to Get You Started in the Course 1",
  note: "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader: "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Three = {
  onichaTopic: 'Meet the Instructor',
  topic: 'Meet the Instructor',
  header: "Specific Steps to Get You Started in the Course",
  note: "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
  subHeader: "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl: "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Four = {
  onichaTopic: 'Accessibility of Course Materials',
  topic: 'Accessibility of Course Materials',
  header: "Specific Steps to Get You Started in the Course",
  note: "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
  subHeader: "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl: "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Five = {
  onichaTopic: 'Requirements',
  topic: 'Requirements',
  header: "Specific Steps to Get You Started in the Course",
  note: "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
  subHeader: "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl: "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Six = {
  onichaTopic: 'Nkowa Ife Omumu a',
  topic: 'Introduction to the Course',
  header: "Specific Steps to Get You Started in the Course",
  note: "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
  subHeader: "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl: "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Seven = {
  onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
  topic: 'Module Objectives',
  header: "Targets and What to Expect in this Module",
  note: "In this module, you will be introduced to\r\n\t1.  The basic information about this course. \r\n\t2.  The methods of assessment in the course\r\n\t3.  The Onitsha society, people and language\r\n\r\nN'ime nkuzi a, aga egosipụtalụ gị\r\n\t1. Ịfe kasị mkpa gbasalụ ọmụmụ ịfe a.\r\n\t2. Ụzọ aga esi nwapụta ịfe nkuzi akụzilu gi. \r\n\t3. Obodo, mmadụ na asụsụ Ọnịcha.\r\n\r\nAt the end of the course, you will be able to explain the overall goal of the course, become familiar with the layout of the online interface, explain the assessment methods for the course and describe the Onitsha Igbo society, people and language.\r\n\r\nNa ngwụsị ọmụmụ ịfe a, ị ga-enwe ike ịkọwa mkpokọta ebumnobi ọmụmụ ịfe, ịmalụzị  ụzọ oyibo ịfe ngosi ya, ịkọwa ụzọ nwapụta ịfe nkuzi a : ịkọwa obodo, mmadụ na asụsụ Ọnịcha",
  subHeader: "What you will be able to do at the end of this module?",
  videoUrl: "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/preview"
}

const Eight = {
  onichaTopic: 'Course Guildlines',
  topic: 'Course Guildlines',
  header: "Guildlines for the Course",
  note: "The Course\r\n\tThis course will take place entirely online and within the Canvas learning management system, Google Classroom, and the Mobile App. However, you will also need an access to word processing software, and textbooks that you must have in hand.\r\n\tThis course is synchronous, meaning that you are expected to meet specific deadlines and proceed through the course along with other students. You are expected to work within specified deadlines that will be explained in the next page.\r\n\t\r\nModules\r\n\tApart from the first module, each module is organized in a similar format, the learning process presented in sequential categories described below:\r\n\tModule Objectives \r\n\tThe Actual Lesson\r\n\tWrap-up quiz, Warm-Up Activities, Take-home tasks and other Assesments (Available only on Canvas) ",
  subHeader: "Getting the best out of this course",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Nine = {
  onichaTopic: 'Assessments and Grades',
  topic: 'Assessments and Grades',
  header: "Grading System",
  note: "Final grades in this course will be calculated according to the following percentages:\r\n\tWeekly 'Conversation Videoconference': 10%\r\n\tDaily 'Wrap-up Quizzes': 15%\r\n\tDaily 'Take-home Tasks': 15%\r\n\tBi-Weekly 'Practice Composition': 20%\r\n\tMidterm Exam/Project: 20%\r\n\tFinal Exam/Project: 20%\r\n\t\r\nNB: The Assesements  are currently available only on the canvas platform",
  subHeader: "Assessments and Distribution of Grades",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Ten = {
  onichaTopic: 'Using the Igbo Keyboard on Windows OS',
  topic: 'Using the Igbo Keyboard on Windows OS',
  header: "Specific Steps to Get You Started in the Course 1",
  note: "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader: "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Eleven = {
  onichaTopic: 'Using the Igbo Keyboard on Mobile Devices',
  topic: 'Using the Igbo Keyboard on Mobile Devices',
  header: "Specific Steps to Get You Started in the Course",
  note: "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader: "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Twelve = {
  onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
  topic: 'Module Objectives',
  header: "Target and What to Expect in this Module",
  note: "Ntọnanị asụsụ obụna bụ mkpụlụabịdịị, eji fa emebe mkpụlụokwu, welụ mkpụlụokwu a wee mepụta ahịlịokwu anyi ji akpalị nkata.\r\n\r\nThe basics of every language are the alphabets, they form every words, and the words form sentences which we use in communicating.\r\nE kelụ ọmụmụ ịfe a n'ụzọ nkuzi dị iche iche, nke aga-akuzi mkpụlụabịdịị na mkpọpụta fa n'asụsụ Ọnịcha.\r\n\r\nThis module is split into different lessons that will teach each alphabet of the Onicha Language and their pronunciation.\r\nNa mkpokọta ọmụmụ ịfe a, ị ga-enwe ike :\r\n\r\nAt the end, you will be able to:\r\nỊrọpụta na ịkpọpụta mkpụlụabịdịị (nke bụ mgbochiume na ụdaume)\r\n\r\nIdentify and pronounce all the Ọnịcha Alphabets (Consonants and vowels).\r\nỊmalụ ịfe dị iche n'etiti mkpụlụabịdịị Ọnịcha na nke bekee,\r\n\r\nDistinguish the Ọnịcha alphabets from the English alphabets. \r\nIji mkpụlụabịdịị ede ahịlịokwu ọfụma.\r\nWrite correctly with the alphabets. \r\n",
  subHeader: "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Thirteen = {
  onichaTopic: "Nkowa - Mkpụlụabịdịị n'asụsụ Ọnịcha",
  topic: 'Introduction - Onicha Alphabets',
  header: "The Onitsha Alphabets",
  note: "Asụsụ Ọnịcha sitelu n'ụdaolu; ya bụ, ofu mkpụlụokwu nwelụ ike ịnwe ofu ụdị mkpụlụabịdịị, ma dị iche na nghọta/ ịfe ọpụtalụ . Nghọta a sitelu n'etu esi akpọpụta mkpụlụokwu afụ.\r\n\r\nThe Onitsha Dialect is a tonal language.That is,a word can have the same letters, but different meanings. This meaning is derived from the tones in which the word is pronounced. \r\nYa melụ, ọkwesilụ ka ịkpọpụta mkpụlụabịdịị n'asụsụ Ọnịcha bụlụ ife izizi ị ga-amụta; makana ọ bụ n'abịdịị ka esi emebe mkpụlụokwu, wee site na mkpụlụokwu mebepụta ahịlịokwu.\r\n\r\nThus, one needs first to learn the act of pronouncing the alphabets in Onicha; since alphabets are the basis of every word and words, the basis of every sentence. \r\nNa ngwụsị ọmụmụ ịfe a, ị ga -enwe ike ịghọta, ịrọpụta ma kpọpụta mkpụlụabịdịị (nke bụ mgbochiume na ụdaume) n'asụsụ Ọnịcha.\r\n\r\n\r\nAt the  end of this module, you will be able to understand, identify and pronounce all the alphabets (Consonants and vowels) in Onicha Dialect.\r\nEnwelụ mkpụlụabịdịị ili ịtọ na isii. N'ime abịdịị a, enwelụ ụdaume ịsatọ na mgbochiume ili ịbụa na ịsatọ bụ ndị yilu  abịdịị bekee ma dịkwa iche na mkpọpụta  n'ọlụ fa na- alụ.\r\n\r\nThere are 36 alphabets in the Onicha Dialect. They are classified into 8 Vowels and 28 Consonants, all with similarities to the English alphabets but with different pronunciation and usage.. \r\nMkpụlụabịdịị na Nkewa ya (Ụdaume na Mgbochiume):\r\nThe  Onitsha alphabets and their classifications (Vowels and Consonants):",
  subHeader: "An Introduction to Alphabets in Onicha Dialect",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Fourteen = {
  onichaTopic: 'Mkpụlụabịdịị A - F',
  topic: 'Letters A - F',
  header: "Mkpụlụabịdịị A - F",
  note: "Ịfe nkili a  n'egosi mkpọpụta na mkpụlụokwu nwelụ mkpụlụabịdịị\"A - F\". Ị ga-amụcha etu esi kpọpụta mkpụlụabidii ndị a n'asụsụ Ọnịcha.\r\n\r\nỌmụmatụ ndị a ga-enyelụ ị aka ịma mkpụlụokwu ụfọdụ ị ga- afụ na nkuzi  n'esote nke a. \r\n\r\n(This video shows the pronunciation and words that contains the letters  \"A  to  F\". You are to memorize these letters exactly as it is pronounced in Onitsha dialect. \r\n\r\nThe use of examples is to familiarize you with some words that you could come across in subsequent lectures).\r\n \r\n\r\nỌmụmatụ\r\n(More Examples):\r\nAlphabet\tPronunciation\tExample\r\nAa\tA.mp3 download\r\nPlay media comment.\tIMG_0863.PNG\r\nBb\tB.mp3 download\r\nPlay media comment.\tIMG_0867.PNG\r\nCHch\tCh.mp3 download\r\nPlay media comment.\tIMG_0870.PNG\r\nDd\tD.mp3 download\r\nPlay media comment.\tIMG_0874.PNG\r\nEe\tE.mp3 download\r\nPlay media comment.\tIMG_0877.PNG\r\nFf\tF.mp3 download\r\nPlay media comment.\tIMG_0879.PNG\r\n ",
  subHeader: "Learning to vocalize and use the letters in words",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Fifteen = {
  onichaTopic: 'Mkpụlụabịdịị G - H',
  topic: 'Letters G - H',
  header: "Mkpụlụabịdịị G - H",
  note: "Ịfe ọgụgụ na ịfe nkili a  bụ maka ịkpọpụta mkpụlụabịdịị \"G- H\" ya na  mkpụlụokwu eji fa mepụta. Enyelụ ofu ọmụmatụ ga-enyelu gị aka ịma mkpụlụabịdịị ndị a ọfụma.\r\n(The material and video below contains the pronunciation of the alphabets \"G - H\" and words formed with them. One example each is given to help you familiarize  with their words).\r\n\r\n \r\n\r\nỌmụmatụ(More Examples)\r\nAlphabet\tPronunciation\tExample\r\nGg\tG.mp3 download\r\nPlay media comment.\tIMG_0880.PNG\r\nGBgb\tGb.mp3 download\r\nPlay media comment.\tIMG_0884.PNG\r\nGHgh\tGh.mp3 download\r\nPlay media comment.\tIMG_0887.PNG\r\nGWgw\tGw.mp3 download\r\nPlay media comment.\tIMG_0889.PNG\r\nHh\tH.mp3 download\r\nPlay media comment.\t",
  subHeader: "Learning to vocalize and use the letters G - H in words",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Sixteen = {
  onichaTopic: 'Mkpụlụabịdịị I - KW',
  topic: 'Letters I - K',
  header: "Mkpụlụabịdịị I - KW",
  note: "Ịfe ọgụgụ na nkili a bụkwọ maka ịkpọpụta mkpuluabịdịị \"i- kw\" na ọmụmatụ okwu eji fa mepụta. Mụa mkpụlụokwu abịdịị ndị a, ka ịnwe ike malụa ọfụma.\r\nThe materials and videos below contains the pronunciations of the alphabets I - K and examples of their usage in words. You are to study and get familiarize  with the words.\r\n \r\nỌmụmatụ(More Examples)\r\nAlphabet\tPronunciation\tExample\r\nIi\tI.mp3 download\r\nPlay media comment.\tIMG_0892.PNG\r\nỊị\tIi.mp3 download\r\nPlay media comment.\tIMG_0894.PNG\r\nJj\tJ.mp3 download\r\nPlay media comment.\tIMG_0898.PNG\r\nKk\tK.mp3 download\r\nPlay media comment.\tIMG_0902.PNG\r\nKPkp\tKp.mp3 download\r\nPlay media comment.\tIMG_0903.PNG\r\nKWkw\tKw.mp3 download\r\nPlay media comment.\tIMG_0905.PNG",
  subHeader: "Learning to vocalize and use the letters I - K in words",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Seventeen = {
  onichaTopic: 'Mkpụlụabịdịị L - NY',
  topic: 'Letters L - N',
  header: "Mkpụlụabịdịị L - NY",
  note: "Ịfe nkili nke a bụ maka ịmụ mkpụlụabịdịị \"L-NY\" na mkpọpụta okwu mebelu fa. Mụa abịdịị ndị a na mkpụlụokwu eji  fa mebe ọfụma.\r\n\r\n This video is to learn about the  pronunciation of the alphabets \"L - NY\" and their word formation. Study and familiarize with the letters and words attached therein.\r\n\r\n\r\nỌmụmatụ (More Examples):\r\n\r\nAlphabet\tPronunciation\tExample\r\nLl\tL.mp3\tIMG_0908.PNG\r\nMm\tM.mp3\tIMG_0910.PNG\r\nNn\tN.mp3\tIMG_0912.PNG\r\nŃń\tNn.mp3\tIMG_0914.PNG\r\nNWnw\tNw.mp3\tIMG_0918.PNG\r\nNYny\tNy.mp3\tIMG_0920.PNG",
  subHeader: "Learning to vocalize and use the letters L - N in words",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Eighteen = {
  onichaTopic: 'Mkpụlụabịdịị O - T',
  topic: 'Letters O - T',
  header: "Mkpụlụabịdịị O - T",
  note: "N'ịfe nkili a, anyị ga- amụ ịkpọpụta mkpụlụ abidii \"O - T\" na mkpụlụokwu eji fa mebe.\r\n\r\nIn this video, we are to study how to pronounce alphabets \"O - T\"and the words formed with their letters.\r\n\r\n\r\nỌmụmatụ (More Examples)\r\nAlphabet\tPronunciation\tExample\r\nOo\tO.mp3\tIMG_0820.PNG\r\nỌọ\tOo.mp3\tIMG_0822.PNG\r\n Pp\tP.mp3\tIMG_0823.PNG\r\nRr\tR.mp3\tIMG_0824.PNG\r\nSs\tS.mp3\tIMG_0825.PNG\r\nSHsh\tSh.mp3\tIMG_0827.PNG\r\nTt\tT.mp3",
  subHeader: "Learning to vocalize and use the letters O - T in words",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Nineteen = {
  onichaTopic: 'Mkpụlụabịdịị U - Z',
  topic: 'Letters U - Z',
  header: "Mkpụlụabịdịị U - Z",
  note: "Ịfe nkili a ga- akuzilu anyị ka esi akpọpụta mkpụlụabịdịị \"U - Z\" na okwu eji fa mepụta. Ọmụmatụ ndị a ga-enyelụ ị aka ịmụta abịdịị  ndịa ọfụma.\r\n\r\nThis video  will teach us the pronunciation of  alphabets \"U - Z\" and their word formation. Here are examples to help you familiarize with the letters.\r\n \r\n\r\nỌmụmatụ(More Examples):\r\nAlphabet\tPronunciation\tExample\r\nUu\tU.mp3 download\r\nPlay media comment.\tIMG_0831.PNG\r\nỤụ\tUu.mp3 download\r\nPlay media comment.\tIMG_0833.PNG\r\nVv\tV.mp3 download\r\nPlay media comment.\tIMG_0835.PNG\r\nWw\tW.mp3 download\r\nPlay media comment.\tIMG_0837.PNG\r\nYy\tY.mp3 download\r\nPlay media comment.\tIMG_0838.PNG\r\nZz\tZ.mp3 download\r\nPlay media comment.\tIMG_0840.PNG",
  subHeader: "Learning to vocalize and use the letters U - Z in words",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Twenty = {
  onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
  topic: 'Module Objectives',
  header: "Target and What to Expect in this Module",
  note: "Ebum n'obi anyị n'ọmụmụ ịfe a bụ, ịmụta ka esi ekene n'asụsụ Ọnịcha. Anyị ga-amụ okwu gbasalụ ịkene ekene na ụdị ekene a na- eji fa ekene.\r\n\r\nOur objective in this module is to learn how to greet in the Onicha language. We will learn words that relate to greetings and what case of greeting they are best used.\r\n Ọmụmụ ịfe a dị ụzọ ịbụa:\r\n\r\nThe module is sectioned in two:\r\nEkene site n'ọge Ụbọsị:\r\nGreetings based on day time:\r\nN'akụkụ nke a, anyị  ga- amụcha ekene gbadolụ ụkwụ n'ọge. Nya bụ, okwu eji ekene madụ site n'ọge ụbọsị.\r\n\r\nIn this section, we will explore time specific greetings, that is, words that are used to greet any individual based on the time of the day.\r\nAnyị ga-amụ ọge  enwelụ n'ụbọsị na ịfe n'egosipute fa.\r\n\r\nWe will learn about each time of the day and their variants.\r\nN'ịmatụ bụ etu esi asị \"ụtụtụ ọma\"\r\n\r\nAn example is how to say 'good morning'.\r\nEkene na- esirọ n'ọge ụbọsị: \r\nCasual greetings:\r\nAna- ekene okwu ekene a´ ọge ọbụna na-agbanyerọ ọge anọ n'imie´.\r\n\r\nCasual greetings are used to reference greetings that are used in more generic cases.\r\nAnyị ga-amụ maka ekene ana- ekene ọge  ọbụna. Fa bụ ndịa: kedụ, kọdị wdg.\r\n\r\nWe will learn simple greetings such as hello, bye and etc.\r\n \r\n\r\nNa ngwụsị ịfe omumụ a, ụmụ akwụkwọ ga enwe ike ịkenelịta onwe fa ma zaa ekene ọfụma. Ọzọ, ụmụ akwụkwọ ga-amụtakwa okwu ọfụ ma nwe ike ịkpọpụta fa ọfụma.\r\n\r\nAt the end of this module, students should be able to communicate greetings properly and respond to them accordingly too. Students will also learn some new words and familiarise with how to pronounce them properly.",
  subHeader: "What you should learn about 'Greatings in Onicha Language'",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyOne = {
  onichaTopic: 'Introduction - Greetings in Onicha Language',
  topic: 'Greetings in Onicha Language',
  header: "Introduction to Greetings in Onicha Language",
  note: "Greetings, otherwise referred to as salutations has always being an important aspect of every culture, either colonial or pre-colonial or the modern day post-colonial lifestyle. Greetings are a means of showing acknowledgement and respect. Not greeting properly is regarded as an act of mannerless-ness and disrespect.\r\n\r\n \r\n\r\nThe measure and the type of relationship existing between the interactants, as well as the means of ensuring sustenance of the binding fabrics that holds the community together.\r\n\r\nuncommon rich value.jpg\r\n\r\nLike every other Language, greetings in Onicha language can take any form, based on who is being greeted and when (the time) the greetings is taking place. There are also some forms of greetings that are casual and may be suitable for any situation based on the relationship between persons involved in the greeting.\r\n\r\nGreetings form a major part of any language because it is basically the start of any conversation and thus needs to be properly understood.\r\n\r\nHence, in the other parts of this module, we will introduce greetings that are based on the time of the day and then greetings that are casual. Also, we will learn how to indicate respect in greetings as a proper greeting has to value the differences in the persons doing the greetings.",
  subHeader: "About how to greet and make salutations in Onicha Language",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyTwo = {
  onichaTopic: 'Greetings by Time',
  topic: 'Greetings by Time',
  header: "Greetings by Time in Onicha",
  note: "As we have talked about in the introduction, Greetings can be made based on the time of the day.\r\nHere, we introduce what greetings is used in each time of the day. The lesson will also show us how to address each day of the week in Igbo language. Generally, the convention of 'good' (Oma) + 'the day time' is used.\r\n\r\n\r\n\r\n\r\nkedụ eeh! Anam anabata ị na nkuzi nke tata.\r\n(Hello! I welcome you to today's class).\r\n\r\nN'ife nkili a, anyị ga-amụ ịkene ekene na ọge eji ekene n'asụsụ ọnịcha.\r\n(In this video, we will be learning about greetings and the time to greet in Onitsha dialect).\r\n\r\nỌge eji ekene ekene n'ụbọsị bụ ndịa: ụtụtụ, efifie, uruluchi/ urulu anyasị, anyasị na ụla anyasị.\r\n(The time of greeting during the day includes: morning, afternoon, evening, night and at bedtime).\r\n\r\nAna- agbakwuye \"ọma\" nime \"ọge\" n'inweta okwu ekene. Ya bụ: Ọge + Ọma = \"Okwu ekene\"\r\n(Generally, \"good\" is added to the time of the day to form a greeting word, that is: Time + Good = Greeting)\r\n\r\nYa melụ, ịfe nkili a ga-enyelụ ị aka ịmụta etu esi ekene madụ ekene n'ụbọsị.\r\n(Conclusively, this video will help you learn how to greet someone at any time of the day).\r\n\r\nNgwa, ka anyị bido! (Now, let's start!)\r\n\r\n1.ỤTỤTỤ (Morning):\r\nỤtụtụ + Ọma = Ụtụtụ ọma (Good morning)\r\n\r\n2. EFIFIE (Afternoon):\r\nEfifie + ọma = Efifie ọma (Good afternoon)\r\n\r\n3. URULUCHI/ URU ANYASỊ (Evening):\r\nUruluchi/ Uru anyasi + Ọma = Uruluchi ọma/ Uru anyasi ọma (Good evening)\r\n\r\n4. ANYASỊ (Night): \r\nAnyasị + ọma = Anyasị ọma (but we greet \"Good evening\" ).\r\n\r\n5.ỤLA ANYASỊ (Night Bedtime):\r\nỤla anyasị + Ọma = Ụla anyasị ọma (Good night)\r\n\r\nỌzokwa, ị nwelụ ike ịsị madụ n'anyasị ma ngị nịa kpalịsịa, \"ka chi fo\"/ \"larụ ọfụma\"\r\n(Also, you can tell someone after discussion at night/ at bedtime,\"let the day break/ sleep well\").\r\n\r\nMalụ, n'ịzachi ya ekene, ịga ekwuchiya okwu ekene afụ.\r\n(Note, to 'reply' a greeting, use the same greeting words).\r\n\r\nỊmatụ: Chika, ụtụtụ ọma; (Chika ga-aza): Amaka, ụtụtụ ọma.\r\nExample: Good morning Chika (Chika will reply): Good morning Amaka\r\n\r\nKedụ ịfe ịmụtalụ? (What have you learnt?)\r\n\r\nKịta, zaa ajụjụ ndị a, iji malụ ma ịmụtakwọlụ ịfe na nkuzi a.\r\n(Now, you will answer these test questions).\r\n\r\nMejue edelede ndịa site n'itinye okwu kwesịlụ ịdị n'ime ya:\r\n(Now, fill in the empty spaces with the right words in your note):",
  subHeader: "To greet a person as per what time of the day it is?",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyThree = {
  onichaTopic: 'Casual Greetings',
  topic: 'Casual Greetings',
  header: "Casual Greetings",
  note: "Greetings such as hello, good day, How about you?, how are you? and other forms of greetings that are not time-restricted are regarded as causal forms of greeting and are used in any situation.\r\n\r\nHere we explore such greetings and show their formation.\r\nEnglish\r\nOnịcha\r\nFormation\r\nHello\r\nKedụ eeh\r\nWelcome\r\n\r\n\r\nNnọọ\r\n\r\n\r\n \r\nHow are you?\r\nKedụ ka ịmelụ?\r\n'Imelu' is you, although 'kedu' means hello, it can also be used to imply 'Are you well?'\r\n\r\nSo, the combination makes something like 'How are you?' or 'Are you okay?' and other variants\r\n\r\nOne can also say 'kedu ka ọdi' which means 'How is it'\r\nI am fine.\r\n\r\n\r\nAdị m mma.\r\n\r\n\r\n \r\nI am not fine.\r\n A noro m ofụma.\r\n \r\nPlease\r\nbiko\r\n \r\nWait \r\nchelụ\r\n \r\nExcuse me\r\nchelụgodu\r\n \r\nIt is fine./He is fine./ She is fine.\r\nỌ dị mma.\r\n \r\nSorry \r\nNdo\r\n \r\nYes\r\nEe /Oo / \r\n \r\nNo\r\nMba\r\n \r\nGood morning\r\nịlarụkwlụfuma? / Ụtụtụ ọma \r\n \r\nGood afternoon\r\nEfifie ọma\r\n \r\nGood evening\r\nUruluchi ọma\r\n \r\nGood night\r\nKa chi fo\r\n \r\nHow to respond to good night \r\nKa chi fo\r\n \r\nGood bye\r\n Ka emesia ( Note: The translation of this to English means something like – let it be until then.)\r\n \r\nSee you later\r\nKa ọ dị\r\n \r\nSafe journey\r\n Ije ọma\r\n \r\nHow about you?\r\n Ngịnwa mee aῇyaa?\r\nHope you are fine?\r\n Ama m na ịnọ ọfụma?\r\nThanks to you\r\n Daalụ \r\nGood day\r\n \r\nYou are welcome\r\n \r\nHow is your dad?\r\nNna'ị melụ anyaa?\r\nBye\r\nKa ọ dị\r\n \r\n\r\nHere is a simple chat based on what we have learnt, listen carefully to identify the words used and try to pronounce them too.\r\n\r\n \r\n\r\nTranscript \r\n\r\nAgba nke mbụ: Amaka na Chiọma bụ ndị ofu ọgbọ na klaasị, zulu onwe fa n'ụzọ wee kenelịta.\r\n(Amaka and Chioma who are classmates meet at the bus stop and greet each other.)\r\nAmaka: kedụ eh!\r\nChioma: kedụ eh!\r\nAmaka: kedụ k'ịmelụ\r\nChioma: Adị m mma\r\nAmaka: kedụ maka nne'i?\r\nChioma: Ọ nọ ọfụma\r\nAmaka: kedụ maka nna'ị\r\nChioma: Ọ nọ ọfụma\r\nAmaka: Kọdị\r\n\r\nAmaka: Hello!\r\nChioma: Hello!\r\nAmaka: How are you?\r\nChioma: I am fine \r\nAmaka: How is your mom? \r\nChioma: She is fine\r\nAmaka: How is your dad? \r\nChioma: He is fine \r\nAmaka: Bye\r\n\r\n",
  subHeader: "What are Casual Greetings? And How do we do them in Onicha Dialect?",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyFour = {
  onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
  topic: 'Module Objectives',
  header: "Targets and What to Expect in this Module",
  note: "N'ime ọmụmụ ịfe a, anyị ga-amụ maka ịkọwa  onwe. Ịfe kachasị mkpa na ịkpalịta nkata bụ ịma ọnye ngị na ya nakpalị.\r\n\r\nIn  this module, our objective is learning to introduce oneself. An essential part of communication is to know who one communicates with. \r\nỌmụmụ ịfe a dị ụzọ ịtọ:\r\n\r\nThe module is made up of 3 lessons;\r\nNnọchionwe  (Personal Pronouns):\r\nN'ebe a, anyị ga-amụ maka nnọchiafa eji akọwa onwe na ụdị dị iche iche.\r\n\r\nHere, we will learn about pronouns that are used to address oneself, and their variants\r\n  2. Ezinụnọ (The Family): \r\n\r\nNagbanyerọ na-enwelụ ọtụtụ ịfe eji akọwa mmadụ dịka: nwanyị/nwọke,ọkpụkpe,ọlụ ọnye na-alụ wdg. N'ebe a,anyị ga-amụ maka ezin'ụnọ na  afa  ana- akpọ ndị mejulu ya n 'asụsụ ọnịcha.\r\n\r\nAlthough there are other elements that can be used to qualify a person such as gender, religion, job status, etc. Here, we will consider the family and learn what each member of the family is called in Onicha.\r\n  3. Ahịlịokwu eji eme nkọwa (Simple Sentences in Introduction):\r\n\r\nAnyị ga-amụ ụfọdụ ahịlịokwu dị mfe eji akọwa onwe.\r\n\r\nWe  will learn some common sentences used to introduce oneself.\r\n\r\n\r\n \r\n\r\n \r\n\r\n ",
  subHeader: "",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyFive = {
  onichaTopic: "Ikọwa Onwe na Ezi n'ụnọ",
  topic: 'Introducing Oneself and Family',
  header: "Introducing Oneself and Family",
  note: "Ịkọwa onwe bụ ịfe na-akpọbata mmadụ n'ibe ya na ịkpa nkata.\r\nlntroducing oneself is a driving tool that leads one into  a conversation.\r\n\r\n \r\n\r\n11111.jpg  \r\n\r\n Mmadụ ịkọwa onwe ya dị oke mkpa maka, ọna-enyelụ aka ịmalu madụ, obi elue ndị ọzọ anị,  n'egosipute ezi omume ma nyelụ aka n'ịnwe ezigbo nkwukọlịta.   \r\n\r\n To introduce oneself is important because it helps one to meet new people,  makes others feel more comfortable and allows you to make a good first impression and aid a good communication.\r\nAnyị ga-ebido  n'ịnebanye anya na nnọchiafa onwe/ nnọchionwe. Ikwupụta afa na -ịkọwa madu  bụ etu  esi eme ka anyị malụ asụsụ ọfụma tupu  abamie n'ime oọmụmụ ịfe a.\r\n\r\nWe will start looking into the personal pronouns. Telling one's name and general introduction is a simple means to acquaint ourselves with the  language before we proceed to other areas.\r\nN'ime nkwupụta nke a, akọwalụm maka onwem. Gee ntị ọfụma ma kwadebe ịkọwa onwe gị\r\n\r\nAttached is a voice of me images (29).jpeg    , as I introduce myself using simple and common characteristic cases. Listen carefully and anticipate to introduce yourself.  \r\n\"Kpọtụlụ onye nkuzi gị\", ka ịfụ ịfe m na-ekwu. Na mkpokọta ọmụmụ ịfe a, ịga aghọta ma nwe ike ịkọwa onwe gị ọfụma.\r\n\r\n\" Meet your Instructor\" to see what I am saying. But by the end of this module, you will fully understand what I said and  be able to introduce yourself.\r\n \r\n\r\n  \r\n\r\n ",
  subHeader: "An Introduction to Learning How to Introduce Oneself and Family",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentySix = {
  onichaTopic: 'Nnọchionwe',
  topic: 'Personal Pronouns',
  header: "Using Personal Pronouns in Onicha",
  note: "Nnọchiafa n'asụsụ Ọnicha dị ụzọ ịbụa: Nnọchiafa ndabelụ na Nnọchiafa nnọlụonwe\r\n\r\nPronouns in  Onitsha language are generally of two forms: the Inseparable  and  Separable form .\r\n\r\n      \r\nNnọchiafa ndabelụ \r\n(Inseparable Pronouns):\r\n\r\nNnọchiafa ndabelụ bụ maka nnọchiafa ofu ịfe. Ọ na-ekwu maka ofu ọnye na -ekwupute okwu ma bụlụ ofu mkpụlụ abịdịị ka eji egosipute ya.\r\n\r\nThe inseparable pronouns only apply to single form of pronoun or it is one person pronoun. They are single subject and  a letter word in the Onitsha alphabets.\r\nỌmụmatụ nnọchiafa ndabelụ:\r\n\r\nExamples of inseparable pronouns:\r\nENGLISH\r\nỌNỊCHA\r\nThat/She/He/It\r\n O, Ọ\r\nYou\r\nI, Ị \r\nI\r\nm(comes after the verb stem)\r\n\r\n\r\n\r\n \r\n\r\n \r\n\r\n \r\n\r\n \r\n\r\n \r\n\r\n \r\n\r\nNnọchiafa ndị a  (i,ị,o,ọ) na- abịa tupu ngwaa site n'otu´ ụdaume dị na ngwaa afụ ma \"m\" n'esote ngwaa.\r\n\r\nUsually, they appear directly before a verb and are harmonized with a verb stem according to  the vowel group of the verb. Exception is with \"m\" which comes after the verb stem.\r\nMalụ na- ekelụ ụdaume ụzọ ịbụa: ụdamfe (a, i, ọ,ụ) na ụdaalọ (e, i, o, u) nke nnọchionwe ndabelụ n'adebelụ n'ịmebe ahịlịokwu.\r\n\r\nNote, vowels are divided into two groups: The A- group (a, ị,ọ,ụ) and The E- group (e, i, o, u),in which the inseparable pronouns agrees to in sentence formation.\r\nỌmụmatụ nnọchiafa ndabelụ n'ahiliokwu (Inseparable Pronouns in sentences):\r\n\r\n i.e.  I/Ị/O/Ọ +  Ngwa ((verb)\r\nỌ : Ọ  na-abịa; (He is coming)\r\nO: O bi n'elu. (She lives upstairs).\r\n Ị ; Ị nọ ya  ọge afụ?  (Were you at that time?)\r\nI; Ebee ka i bi - (Where do you live?)\r\nA bụ m ọnye Ọnịcha ( I am a native of Onitsha).\r\n\r\nNnọchiafa nnọlụonwe\r\n\r\n(Separable Pronouns): \r\nỤdị nnọchiafa nke a na-adi ebe ọbụna n 'ahiliokwu nke  nwelụ ike ibụ mkpụlụokwu ma ọ bụ mkpụlụ abịdịị \"Ị na m\". Nnọchiafa nnọlụonwe ga- alụ ọlụ nnọchinke (ọnye nwe ịfe ).\r\nThese types of pronouns can appear anywhere in a sentence and can be a word with the exception of mine which is same as\" Ị or m \". The separable pronouns can also be used as possessive pronouns.\r\nNnọchiafa nnọlụonwe  bụ ndi a:\r\n\r\nThe separable or possessive pronouns are:\r\nEnglish\r\nỌnịcha\r\nWe/Us\r\nAnyị\r\nYou(Singular)\r\nNgị\r\nYou(Plural)\r\nUnu\r\nHim\r\nNya\r\nMe \r\nMụ\r\nThey/Them\r\nFa\r\n \r\n\r\nPossessive Pronouns\r\nNnọchinke\r\nMine/My\r\n Nkem\r\nYours/Your\r\nNke ngị/Unu\r\nHers/His/Its\r\nNke ya \r\nOurs/Our\r\n Nke anyỊ\r\nTheir/Theirs\r\nNke fa\r\n \r\n\r\n2\r\nMụ na gị\r\nMe and You\r\n3\r\nỌ bụ mama unu\r\nShe is your mother \r\n4\r\nỌ bụ nke ya?\r\nIs it his?\r\n5\r\nAgwalụ m ya\r\nI told him\r\n6\r\nỊma nke anyị?\r\nDo you know ours?\r\n7\r\nGwa fa\r\nTell them\r\n8\r\nNke unu epeka\r\nYours is small\r\n9\r\nNke fa ebuka\r\nTheirs are big\r\n10\r\nChukwu nọnyelụ anyị\r\nGod is with us\r\n11\r\nDi m\r\nMy husband ('m' comes after what they are possessing)\r\n ",
  subHeader: "Personal Pronouns... They are for personalizing things... What are they in Onicha?",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentySeven = {
  onichaTopic: "Ezi n'ụnọ",
  topic: 'The Family',
  header: "Members of the Family",
  note: "Na nkuzi galụ aga, anyị mụlụ maka nnochiafa eji ede ahịlịokwu na nnọchinke fa. Nee mkpụlụokwu eji ekwu maka ezi n'ụnọ.\r\n\r\nIn the previous lessons, we learnt about pronouns that are used to construct sentences and their possessive forms.\r\nThese words are used in relation to family:\r\n \r\n\r\nMembers of the family\r\n\r\n  \r\n\r\nNne\tMother\t \tDi\tHusband\r\nNna\tFather\t \tNwunye\tWife\r\nNwa nwọke\tSon\t \tNwanne nwọke\tBrother\r\nNwa nwanyị\tDaughter\t \tNwanne nwanyị\tSister\r\n \r\n\r\n \r\n\r\nEzinụlọ Ahụ :: The Extended Family\r\nNnanna\r\nGrandfather\r\nNna na.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nNwanne nwoke ( nne / nna )\r\nUncle\r\nNwanne nwoke nne.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\n / Nwanne nwoke nna.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nNnenne\r\nGrandmother\r\nNne ne.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nNwanne nwanyị ( nne/nna )\r\nAunt\r\nNwanne nwanyị nne.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\n / Nwanne nwanyị nna.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nỌgọ\r\nIn-law\r\nỌgọ.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nNne di / nne nwunye\r\nMother In-law\r\nNne di.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\n / Nne nwunye.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nNwa nwanne ( nwanyị / nwọke )\r\nNiece / Nephew\r\nNwa nwanne nwanyị nwoke.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\n \r\n \r\n\r\nNdị a bụ mkpụlụokwu kwesịlụ iji wee mebe ahịlịokwu gbasalụ ezin'ụnọ. Anyị ga-enebanye anya n'ọmụmatụ ndị  a na ka esi eji fa  na mkpụlụokwu nnochinke emebe ahịlịokwu.\r\n\r\nThese are basic or common words we could use in making sentences that are related to family. We will take a look below at these examples above in conjugation with possessive pronouns  to compose a sentence. Using these words in a conjugation, we can have:\r\nNne' i /Nne gị\r\nYour/ His/ Her/mother\r\nNne anyị\r\nOur Mother\r\nNne fa\r\n Their mother\r\nNne unu\r\nYour (plural) mother\r\n \r\n\r\n \r\n\r\nIJI NNOCHINKE MEBE AHILIOKWU EZIN'ỤNỌ\r\n\r\nFọdụ ahịrịokwu dị mfe nke nwere ikike ịkpọ aha (JANET PLEASE HELP REWRITE THIS IN ONICHA)\r\n\r\nSome Simple Sentences with Possessive Pronouns\r\n \r\n\r\nNne m ga-abịa\r\nMy mother will come\r\nNne m ga-abịa.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nNne gị ga-abịa\r\nDo you have siblings?\r\nNne gị ga-abịa.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nỊ nwelụ ụmụnne?\r\nDo you have siblings?\r\nỊ nwelụ ụmụnne.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nỌ nwelụ ụmụaka?\r\nDoes he/she have children?\r\nỌ nwelụ ụmụaka.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nKedụ ọge nnanna'ị ga-abịa?\r\nWhen is your grandpa visiting?\r\nKedụ ọge nnanna'ị ga-abịa.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nNwanne nna gị nwọke nọ nso kịta!\r\nYour uncle is around now!\r\nNwanne nna gị nwọke nọ nso kịta.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\nỌ bụ nwa nwanne nna m\r\nHe is my cousin\r\nỌ bụ nwa nwanne nna m.mp3\r\n              \r\n              \r\n                download\r\n              \r\n            \r\n\r\n          \r\n            Play media comment.\r\n          \r\n        \r\n",
  subHeader: "How do one refer a family member in Onicha?",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyEight = {
  onichaTopic: "Ụfọdụ Ahịlịokwu Eji Akọwa Onwe",
  topic: 'Simple Sentences',
  header: "Simple Sentences in Introduction of Oneself",
  note: "Ndị a bụ ụfọdụ ahịlịokwu inwelụ ike iji  kọwalụ ọyị, onye nkuzi, nwa klaasị ma  ọ bụ ọnye ọbụna onwe i; ya na ịza/ ịjụ ajụjụ ga-esote ya.\r\n\r\nBelow are  some sentences that  can be used in introducing yourself to a  friend, your instructor, your class mate or anyone and some possible replies or questions.\r\nSome useful sentences to introduce yourself:\r\n\r\nEnglish\tOnicha\tAudio/Video (needs work)\r\nWhat is your name?\tKedụ afa gị?\t\r\nMy name is …\tAfa m bụ …\t \r\nWhere are you from?\tỌnye ebee ka ị bụ?\t \r\nI'm from …\tA bụ m ọnye . . .\t\r\nWelcome\tNnọọ\t\r\nDo you speak English?\tỊ na-asụ oyibo?\t\r\nDo you speak Ọnịcha?\tỊ na-asụ Ọnịcha?\t\r\nYes, a little\tEee, anam asụ ya ọbele\t\r\nHow are you?\tkedụ k'ịmelụ?\t\r\nI'm good, thanks\tAdị m mma, daalụ\t\r\nNice to meet you\tObi dị m mma ịmalụ ọnye ị bụ\t\r\nAnd you?\tNgịnwa kwanụ?",
  subHeader: "Some common moment to moment words of introduction",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyNine = {
  onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
  topic: 'Module Objectives',
  header: "Target and What to Expect in this Module",
  note: "Usolo Ọnụọgụgụ [The numbering system]\r\nỊgụ ịfe magbulu onwe' i makana ọ na-enyelụ anyị aka ịghọta ọge. Na mkpokọta ọmụmụ ịfe a, ị ga-enwe ike :\r\n\r\nCounting is a wonderful skill that allows us to understand time. At the end, you will be able to:\r\n \r\n\r\nIgụ ọnụọgụgụ bido na ofu lue na ofu narị n'asụsụ  Ọnịcha.\r\nCount numbers from 1 to 100 in Ọnịcha Dialect.\r\nỊtụghalị  ọnụọgụgụ nke oyibo n'asụsụ Ọnịcha.\r\nTranslate numbers in English to Ọnịcha Dialect.\r\nỊde ọnụọgugụ ofụma.\r\nWrite numbers correctly.\r\nỊrọpụta na ịkpọpụta ọnụọgụgụ bido na ofu lue na ofu narị n'asụsụ Ọnịcha.  \r\n         Identify and pronounce numbers from 1 to 100 in  Ọnịcha Dialect.\r\nỊnye akara ekwenti na asụsụ Ọnịcha.\r\n        Give phone numbers in Onicha dialect\r\nỊgbakọ na Ịwepụ mkpụlụọnụọgụgụ n'asụsụ Ọnịcha\r\n        Do simple addition and subtraction in Onicha dialect\r\n \r\n \r\n\r\n ",
  subHeader: "What are the basics of numbering in Onicha Dialect",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Thirty = {
  onichaTopic: "Nkọwa - Ọnụọgụgụ n'asụsụ Ọnịcha",
  topic: 'Numbers in Onitsha Dialect',
  header: "Introducing Numbers in Onitsha Dialect",
  note: "Ọdi ụzọ ịbụa esi agụ ọnụọgụgụ n'Ọnịcha mana e nwelụ ọbele ndiiche di n'etiti fa.  Fa bụ ndịa:\r\n\r\n(Numbers  in Igbo are counted in two different counting systems that differ slightly from one another.  The two counting systems are):\r\n\r\n1) Ịgụ ọnụọgụgụ n'ọge kịta, gbadolu ụkwụ na ọnụọgụgụ nke ili. Ewepụtalụ  nke a ka ịgụ ọnụọgụgụ wee dị mfe.\r\n\r\n(The current (most recent) counting system, the decimal system is based on the number ten. This was created to make Igbo counting less cumbersome).\r\n(2) Ịgụ ọnụọgụgụ n'ọge gboo, gbadolu ụkwụ ọnụọgụgụ nke oru.\r\n\r\n(The older popular counting system.  This is based on the number twenty). \r\n \r\n\r\nỊnwelụ ike igu ọnụọgụgụ  n'ụzọ nke ọbụna n'ime fa. Malụkwa na ọnụọgụgụ  nke ofu lue na nke ili na itenani bu ofu n'etiti ụzọ ịbụa afụ ma dịkwa iche bido n'ọnụọgụgụ nke ili ịbụa (20, 21.....) wee dịlụ gabazịa (wdg) n'ụzọ nke oru.\r\n\r\n(Both counting systems are still relevant. Note that in both numbering system, the first nineteen numbers are the same but differs from the multiples of twenty et.c. in the old system.\r\n\r\n Nee' ọnụọgụgụ nke ụzọ ịbụa afụ:\r\nHere are the numbers  in both the old and current numbering systems.\r\n \r\n\r\nEnglish (Bekee)\r\n\r\n \r\n\r\nO̩ni̩cha (Old system)\r\n\r\n \r\n\r\nO̩ni̩cha (New system)\r\n\r\nZero (0)\r\n\r\nNcha\r\n\r\nSame as old system up to 19\r\n\r\nOne (1)\r\n\r\nOfu\r\n\r\n...................................\r\n\r\nTwo (2)\r\n\r\nỊbụa\r\n\r\n...................................\r\n\r\nThree (3)\r\n\r\nỊtọ\r\n\r\n....................................\r\n\r\nFour (4)\r\n\r\nỊnọ\r\n\r\n....................................\r\n\r\nFive (5)\r\n\r\nIse\r\n\r\n...................................\r\n\r\nSix (6)\r\n\r\nIsii\r\n\r\n...................................\r\n\r\nSeven (7)\r\n\r\nỊsaa\r\n\r\n....................................\r\n\r\nEight (8)\r\n\r\nỊsatọ\r\n\r\n....................................\r\n\r\nNine (9)\r\n\r\nItenanị\r\n\r\n....................................\r\n\r\nTen (10)\r\n\r\nIli\r\n\r\n....................................\r\n\r\n.............................................\r\n\r\nMultiples of ten begins old system\r\n\r\nMultiples of ten begins new system\r\nEleven (11)\r\n\r\nIli na ofu\r\n\r\n(ten and one)\r\n\r\nSame as old system up to 19\r\n\r\nTwelve (12)\r\n\r\nIli na ịbụa\r\n\r\n(ten and two)\r\n\r\n......................................\r\n\r\nThirteen (13)\r\n\r\nIli na ịtọ\r\n\r\n(ten and three)\r\n\r\n......................................\r\n\r\nFourteen (14)\r\n\r\nIli na ịnọ\r\n\r\n(ten and four)\r\n\r\n......................................\r\n\r\nFifteen (15)\r\n\r\nIli na ise\r\n\r\n(ten and five)\r\n\r\n......................................\r\n\r\nSixteen (16)\r\n\r\nIli na isii\r\n\r\n(ten and six)\r\n\r\n......................................\r\n\r\nSeventeen (17)\r\n\r\nIli na ịsaa\r\n\r\n(ten and seven)\r\n\r\n......................................\r\n\r\nEighteen (18)\r\n\r\nIli na ịsatọ\r\n\r\n(ten and eight)\r\n\r\n......................................\r\n\r\nNineteen (19)\r\n\r\nIli na itenanị\r\n\r\n(ten and nine)\r\n\r\n......................................\r\n\r\n............\r\n\r\n...............................................\r\n\r\n........................................\r\n\r\nTwenty (20)\r\n\r\nOru (20)\r\n\r\nCounting based on 20 begins (the old system)\r\n\r\nIli ibua (10 x2)\r\n\r\nCounting based on 10 continues (the new system)\r\n\r\n...............................................\r\n\r\n..............................................\r\n\r\n........................................\r\n\r\nTwenty one (21)\r\n\r\nOru na ofu\r\n\r\n(20 and 1)\r\n\r\nIli ibua na ofu\r\n\r\n(10 × 2) and 1\r\n\r\nTwenty two (22)\r\n\r\nOru na ịbụa\r\n\r\n( 20 and 2)\r\n\r\nIli ibua na ịbụa\r\n\r\n(10 × 2) and 2\r\n\r\nTwenty three (23)\r\n\r\nOru na ịtọ\r\n\r\n(20 and 3)\r\n\r\nIli ibua na ịtọ\r\n\r\n(10 × 2) and 3\r\n\r\nTwenty four (24)\r\n\r\nOru na ịnọ\r\n\r\n(20 and 4)\r\n\r\nIli ibua na ịnọ\r\n\r\n(10 × 2) and 4\r\n\r\nTwenty five (25)\r\n\r\nOru na ise\r\n\r\n(20 and 5)\r\n\r\nIli ibua na ise\r\n\r\n(10 × 2) and 5\r\n\r\nTwenty six (26)\r\n\r\nOru na isii\r\n\r\n(20 and 6)\r\n\r\nIli ibua na isii\r\n\r\n(10 × 2) and 6\r\n\r\nTwenty seven (27)\r\n\r\nOru na ịsaa\r\n\r\n(20 and 7)\r\n\r\nIli ibua na ịsaa\r\n\r\n(10 × 2) and 7\r\n\r\nTwenty eight (28)\r\n\r\nOru na ịsatọ\r\n\r\n(20 and 8)\r\n\r\nIli ibua na ịsatọ\r\n\r\n(10 × 2) and 8\r\n\r\nTwenty nine (29)\r\n\r\nOru na Itenanị\r\n\r\n(20 and 9)\r\n\r\nIli ibua na Itenanị\r\n\r\n(10 × 2) and 9\r\n\r\nThirty (30)\r\n\r\nOru na ili\r\n\r\n(20 and 10)\r\n\r\nIli  ito\r\n\r\n(10 x 3)\r\n\r\nForty (40)\r\n\r\nOru ịbụa\r\n\r\n(20x2)\r\n\r\nIli ịnọ\r\n\r\n(10x4)\r\n\r\nFifty (50)\r\n\r\nOru ịbụa na ili\r\n\r\n(20x2) and 10\r\n\r\nIli ise\r\n\r\n(10x5)\r\n\r\nSixty (60)\r\n\r\nOru ịtọ\r\n\r\n(20x3)\r\n\r\nIli isii\r\n\r\n(10x6)\r\n\r\nSeventy (70)\r\n\r\nOru ịtọ na  ili\r\n\r\n(20x3) and 10\r\n\r\nIli ịsaa\r\n\r\n(10x7)\r\n\r\nEighty (80)\r\n\r\nOru ịnọ\r\n\r\n(20 x4)\r\n\r\nIli ịsatọ\r\n\r\n(10x8)\r\n\r\nNinety (90)\r\n\r\nOru ịnọ na ili\r\n\r\n(20x4) and 10\r\n\r\nIli itenanị\r\n\r\n(10x9)\r\n\r\nHundred (100)\r\n\r\nNarị\r\n\r\n(100)\r\n\r\nNarị\r\n\r\n(100)\r\n\r\n ",
  subHeader: "The basics of numbering in Onicha Dialect",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const ThirtyOne = {
  onichaTopic: "Gụọ site na ofu wee lue ili ibụa",
  topic: 'Counting',
  header: "Counting from 1 to 20",
  note: "Deghalịa (Transcribe)\r\n\r\nKilie ma gee ntị na mkpọpụta ọnụọgụgụ nke asụsụ Ọnịcha dị n'ime ịfe nkili a.\r\n\r\nWatch and listen to  the pronunciation of each word of the onicha dialect numbers in this video.\r\nKilie ya ọzọkwa ma depụta ọnụọgụgụ ndị a.\r\n\r\nReplay the video and write out the numbers.\r\nGee ntị ọfụma na nkwuputa okwu a. Kpọpụta ọnụọgụgụ ndị a ka esi kpọọ ya.\r\n\r\nListen carefully to the audio as pronounced by the speaker. Repeat Loudly each number as pronounced by the speaker.\r\ne i ị o ọ u ụ\r\nI Ị O Ọ U Ụ\r\nNumber (in English)\tOnicha Dialect\tPronunciation (Audio)\r\n(click on each of the following clip to listen to their pronunciations. Say the words out loud)\r\n\r\n1\t Ofu\t\r\n2\t Ịbụa\t\r\n3\t Ịtọ\t\r\n4\t Ịnọ\t\r\n5\t Ise\t\r\n6\t Isii\t\r\n7\t Ịsaa\t\r\n8\t Ịsatọ\t\r\n9\t Itenanị\t\r\n10\t Ili\t\r\n11\t Ili na ofu\t\r\n12\t Ili na ịbụa\t\r\n13\t Ili na ịtọ\t\r\n14\t Ili na ịnọ\t\r\n15\tIli na ise\t\r\n16\tIli na isii\t\r\n17\tIli na ịsaa\t\r\n18\tIli na ịsatọ\t\r\n19\tIli na itenanị\t\r\n20\tIli ịbụa\t\r\n \r\n\r\n ",
  subHeader: "The basics of counting in Onicha Dialect",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const ThirtyTwo = {
  onichaTopic: "Ọkwa na Usolo Ịfe",
  topic: 'Ranking and Order of Things',
  header: "Ranking and Ordering",
  note: "Ịgụ ịfe nkịtị (mkpọafa) bụ ikwu ọne ịfe dị, dịka: ofu, ịbụa, ịtọ ịnọ, ise wdg.\r\n\r\nCardinal Numbers are numbers that tell us the quantity of something, such as one, two, three, four, five, etc. \r\nỌnụgụgụ nke usolo bụ ọnụọgụgụ nke n'egosi ebe ịfe dị dịka: nke izizi, nke ịbụa, nke ịnọ, nke ise wdg.\r\n\r\nOrdinal Numbers are numbers that show the position (or rank) of items in a list, such as first, second, third, fourth, fifth, etc.\r\nExample (Ịmatụ): \r\nCardinal (Quantity)\r\nOrdinal (Rank)\r\n1\r\nOne dog\r\n\r\n Ofu nkịta \r\nFirst dog\r\n\r\n(Nkịta nke izizi)\r\n2\r\nTwo dogs\r\n\r\nNkịta ịbua\r\nSecond dog\r\n\r\nNkịta nke ịbua\r\n \r\n\r\nRanking (Bekee)\r\nỌkwa  (Ọnịcha)\r\nfirst\r\nnke izizi\r\nsecond\r\nnke ịbụa\r\nthird\r\nnke ịtọ\r\nfourth\r\nnke ịnọ\r\nfifth\r\nnke ise\r\nsixth\r\nnke isii\r\nseventh\r\nnke isaa\r\neighth\r\nnke ịsatọ\r\nninth\r\nnke itenanị\r\ntenth\r\nnke ili\r\neleventh\r\nnke ili na ofu\r\ntwelfth\r\nnke ili na ịbụa\r\nthirteenth\r\nnke ili na ịtọ\r\nfourteenth\r\nnke ili na ịnọ\r\nfifteenth\r\nnke ili na ise\r\nsixteenth\r\nnke ili na isii\r\nseventeenth\r\nnke ili na ịsaa\r\neighteenth\r\nnke ili na ịsatọ\r\nnineteenth\r\nnke ili na itenanị\r\ntwentieth\r\nnke ili ịbụa (nke oru)\r\n \r\n\r\nOrder of things (Bekee)\r\n\r\nUsolo ịfe ( Ọnicha)\r\n\r\nonce\r\n\r\n \r\n\r\nofu ugbolo\r\n\r\n \r\n\r\ntwice\r\n\r\n \r\n\r\nugbolo ibụa (ugbolo na abọ)\r\n\r\n \r\n\r\n ",
  subHeader: "About Ranking and Ordering things in Onicha Dialect",
  videoUrl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

export default function Study({ navigation }) {

  const route = useRoute()
  const [lessonId, setId] = useState()
  useEffect(() => { setId(route.params?.item.id) }, [])
  useEffect(() => { studyData(lessonId) }, [lessonId])

  const [state, setState] = useState({
    header: '', subHeader: '', paragraph: '',
    lectureTitle: '', videoUrl: ''
  });

  const next = () => {
    setId(lessonId + 1)
    studyData(lessonId)
  }

  const previous = () => {
    setId(lessonId - 1)
    studyData(lessonId)
  }

  const setValue = (arr) => {
    setState({...state,
      header: arr.header,
      subHeader: arr.subHeader, paragraph: arr.note,
      lectureTitle: arr.onichaTopic, videoUrl: arr.videoUrl
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
        navigation.navigate("EndNew", { "moduleName": " \n'Start Here'" })
        break;
      case 7:
        setValue(Six)
        break;
      case 8:
        setValue(Seven)
        break;
      case 9:
        setValue(Eight)
        break;
      case 10:
        setValue(Nine)
        break;
      case 11:
        setValue(Ten)
        break;
      case 12:
        setValue(Eleven)
        break;
      case 13:
        navigation.navigate("EndNew", { "moduleName": " \n'Nkowa Ife Omumu a'" })
        break;
      case 14:
        setValue(Twelve)
        break;
      case 15:
        setValue(Thirteen)
        break;
      case 16:
        setValue(Fourteen)
        break;
      case 17:
        setValue(Fifteen)
        break;
      case 18:
        setValue(Sixteen)
        break;
      case 19:
        setValue(Seventeen)
        break;
      case 20:
        setValue(Eighteen)
        break;
      case 21:
        setValue(Nineteen)
        break;
      case 22:
        navigation.navigate("EndNew", { "moduleName": " \n'Mkpụlụ Abịdịị N\'Asụsụ Ọnịcha'" })
        break;
      case 23:
        setValue(Twenty)
        break;
      case 24:
        setValue(TwentyOne)
        break;
      case 25:
        setValue(TwentyTwo)
        break;
      case 26:
        setValue(TwentyThree)
        break;
      case 27:
        navigation.navigate("EndNew", { "moduleName": " \n'Ekene N'Asusu Onicha'" })
        break;
      case 28:
        setValue(TwentyFour)
        break;
      case 29:
        setValue(TwentyFive)
        break;
      case 30:
        setValue(TwentySix)
        break;
      case 31:
        setValue(TwentySeven)
        break;
      case 32:
        setValue(TwentyEight)
        break;
      case 33:
        navigation.navigate("EndNew", { "moduleName": " \n'Nkọwa Onwe na Ezi n\'ụnọ'" })
        break;
      case 34:
        setValue(TwentyNine)
        break;
      case 35:
        setValue(Thirty)
        break;
      case 36:
        setValue(ThirtyOne)
        break;
      case 37:
        setValue(ThirtyTwo)
        break;
      case 38:
        navigation.navigate('Assessments')
        break;    
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} headerText={state.lectureTitle} />
      <View style={styles.container}>
        <View style={styles.video}>
          <Video
            source={{ uri: state.videoUrl }}
            shouldPlay
            useNativeControls
            resizeMode='cover'
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
    fontSize: 24,
    margin: 5,
    fontFamily: 'merriweather-Regular'
  },

  subHeader: {
    fontSize: 20,
    margin: 5,
    color: '#8772BC',
    fontFamily: 'merriweather-LightItalic'
  },

  paragraph: {
    flex: 1,
    fontSize: 14,
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
    fontSize: 16,
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