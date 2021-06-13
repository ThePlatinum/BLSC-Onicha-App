import { Video } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ReactPlayer from 'react-player';
import Header from './Header'

const One = {
  onichaTopic : 'Nnọọ na Ọmụmụ ịfe nke Asụsụ Ọnịcha',
  topic : 'Welcome to the Onicha Course',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Two = {
  onichaTopic: 'Navigating the Course',
  topic : 'Navigating the Course',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Three = {
  onichaTopic: 'Meet the Instructor',
  topic : 'Meet the Instructor',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Four = {
  onichaTopic: 'Accessibility of Course Materials',
  topic : 'Accessibility of Course Materials',
  header : "Specific Steps to Get You Started in the Course in 222",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Five = {
  onichaTopic: 'Requirements',
  topic : 'Requirements',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Six = {
  onichaTopic: 'Nkowa Ife Omumu a',
  topic : 'Introduction to the Course',
  header : "Specific Steps to Get You Started in the Course in 222",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.\n",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/view?usp=sharing"
}

const Seven = {
  onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
  topic : 'Module Objectives',
  header : "Target and What to Expect",
  note : "In this module, you will be introduced to\r\n\t1.  The basic information about this course. \r\n\t2.  The methods of assessment in the course\r\n\t3.  The Onitsha society, people and language\r\n\r\nN'ime nkuzi a, aga egosipụtalụ gị\r\n\t1. Ịfe kasị mkpa gbasalụ ọmụmụ ịfe a.\r\n\t2. Ụzọ aga esi nwapụta ịfe nkuzi akụzilu gi. \r\n\t3. Obodo, mmadụ na asụsụ Ọnịcha.\r\n\r\nAt the end of the course, you will be able to explain the overall goal of the course, become familiar with the layout of the online interface, explain the assessment methods for the course and describe the Onitsha Igbo society, people and language.\r\n\r\nNa ngwụsị ọmụmụ ịfe a, ị ga-enwe ike ịkọwa mkpokọta ebumnobi ọmụmụ ịfe, ịmalụzị  ụzọ oyibo ịfe ngosi ya, ịkọwa ụzọ nwapụta ịfe nkuzi a : ịkọwa obodo, mmadụ na asụsụ Ọnịcha",
  subHeader : "What you will be able to do at the end of this module?",
  videoUrl : "https://drive.google.com/file/d/1aGoWZMSeQnAmAXCA1uHSSAttTSuEdSAE/preview"
}

const Eight = {
  onichaTopic: 'Course Guildlines',
  topic : 'Course Guildlines',
  header : "Guildlines for the Course",
  note : "The Course\r\n\tThis course will take place entirely online and within the Canvas learning management system, Google Classroom, and the Mobile App. However, you will also need an access to word processing software, and textbooks that you must have in hand.\r\n\tThis course is synchronous, meaning that you are expected to meet specific deadlines and proceed through the course along with other students. You are expected to work within specified deadlines that will be explained in the next page.\r\n\t\r\nModules\r\n\tApart from the first module, each module is organized in a similar format, the learning process presented in sequential categories described below:\r\n\tModule Objectives \r\n\tThe Actual Lesson\r\n\tWrap-up quiz, Warm-Up Activities, Take-home tasks and other Assesments (Available only on Canvas) ",
  subHeader : "Getting the best out of this course",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Nine = {
  onichaTopic: 'Assessments and Grades',
  topic : 'Assessments and Grades',
  header : "Grading System",
  note : "Final grades in this course will be calculated according to the following percentages:\r\n\tWeekly 'Conversation Videoconference': 10%\r\n\tDaily 'Wrap-up Quizzes': 15%\r\n\tDaily 'Take-home Tasks': 15%\r\n\tBi-Weekly 'Practice Composition': 20%\r\n\tMidterm Exam/Project: 20%\r\n\tFinal Exam/Project: 20%\r\n\t\r\nNB: The Assesements  are currently available only on the canvas platform",
  subHeader : "Assessments and Distribution of Grades",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Ten = {
  onichaTopic: 'Using the Igbo Keyboard on Windows OS',
  topic : 'Using the Igbo Keyboard on Windows OS',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Eleven = {
  onichaTopic: 'Using the Igbo Keyboard on Mobile Devices',
  topic : 'Using the Igbo Keyboard on Mobile Devices',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Twelve = {
  onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
  topic : 'Module Objectives',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Thirteen = {
  onichaTopic: "Nkowa - Mkpụlụabịdịị n'asụsụ Ọnịcha",
  topic : 'Introduction - Onicha Alphabets',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Fourteen = {
  onichaTopic: 'Mkpụlụabịdịị A - F',
  topic : 'Letters A - F',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Fifteen = {
  onichaTopic: 'Mkpụlụabịdịị G - H',
  topic : 'Letters G - H',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Sixteen = {
  onichaTopic: 'Mkpụlụabịdịị I - KW',
  topic : 'Letters I - K',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Seventeen = {
  onichaTopic: 'Mkpụlụabịdịị L - NY',
  topic : 'Letters L - N',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Eighteen = {
  onichaTopic: 'Mkpụlụabịdịị O - T',
  topic : 'Letters O - T',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Nineteen = {
  onichaTopic: 'Mkpụlụabịdịị U - Z',
  topic : 'Letters U - Z',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Twenty = {
  onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
  topic : 'Module Objectives',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyOne = {
  onichaTopic: 'Introduction - Greetings in Onicha Language',
  topic : 'Introduction - Greetings in Onicha Language',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyTwo = {
  onichaTopic: 'Greetings by Time',
  topic : 'Greetings by Time',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyThree = {
  onichaTopic: 'Casual Greetings',
  topic : 'Casual Greetings',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyFour = {
  onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
  topic : 'Module Objectives',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyFive = {
  onichaTopic: "Ikọwa Onwe na Ezi n'ụnọ",
  topic : 'Introducing Oneself and Family',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentySix = {
  onichaTopic: 'Nnọchionwe',
  topic : 'Personal Pronouns',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentySeven = {
  onichaTopic: "Ezi n'ụnọ",
  topic : 'The Family',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyEight = {
  onichaTopic: "Ụfọdụ Ahịlịokwu Eji Akọwa Onwe",
  topic : 'Simple Sentences in Introduction of Oneself',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const TwentyNine = {
  onichaTopic: 'Ebummobi Ọmụmụ Ịfe',
  topic : 'Module Objectives',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const Thirty = {
  onichaTopic: "Nkọwa - Ọnụọgụgụ n'asụsụ Ọnịcha",
  topic : 'Introduction - Numbers in Onitsha Dialect',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const ThirtyOne = {
  onichaTopic: "Gụọ site na ofu wee lue ili ibụa",
  topic : 'Counting from 1 to 20',
  header : "Specific Steps to Get You Started in the Course",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
}

const ThirtyTwo = {
  onichaTopic: "Ọkwa na Usolo Ịfe",
  topic : 'Ranking and Order of Things',
  header : "Specific Steps to Get You Started in the Course 1",
  note : "This course teaches the original form of O̩ni̩cha Ado Igbo language spoken by the sons of the soil (Onitsha indigenes). In this course you will learn the distinctive nasalization and aspiration which are phonologically distinctive from other Igbo dialects (Onumajuru, 2016  download).\r\n\r\nO̩mụmụ ịfe a na-akụzi asụsụ O̩ni̩cha ado nke ndi̩ Igbo, ọ  bụ ndi̩ amụnyelụ n'obodo O̩ni̩cha na-asu ya (Ndị O̩ni̩cha). N'ime nkuzi a, ịga-amu i̩su n'onu nke di̩ iche n'asusu Igbo ndi̩ ọzọ (Onumajuru, 2016  download).\r\n\r\nONICHA DIALECT 101 course is an introductory level course in O̩ni̩cha dialect. (ASỤSỤ ỌNỊCHA 101 bụ nkuzi na-akọwa maka asụsụ O̩ni̩cha).\r\n\r\nBecause the majority of learners need to have discussion around material to build meaning. As this process takes time and to keep us all thinking and talking about the same material to have meaningful exchanges, this course is currently not setup with working ahead/self-study in mind. That being said, some material will be made available well advance of due dates and some early work is accepted.",
  subHeader : "Learn the purpose of the course, the objectives, and what is expected of you",
  videoUrl : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
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
        //setValue(Six)
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
        //setValue(One)
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
        //setValue(Eleven)
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
        //setValue()
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
        //setValue()
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
    }
  }

  useEffect( () => { studyData(lessonId) }, [] )

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} headerText={state.lectureTitle}/>
      <View style={styles.container}>
        <View style={styles.video}>
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
             */}
          <Video
            source = {{uri: state.videoUrl}}
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