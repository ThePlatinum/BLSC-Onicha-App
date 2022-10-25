import React from 'react';
import { StatusBar, StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-ionicons';

export default function Header({navigation , headerText}) {

  const openDraw = () => {
    navigation.openDrawer();
  }
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='#9722A8'
        barStyle='light-content'
        />
        <View style={styles.head}>
        <Icon name='menu' color='white' onPress={openDraw} style={{paddingLeft: 5}} />
        <Text style={styles.header}>{headerText}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9722A8',
    justifyContent: 'flex-end',
    alignContent: 'center',
    padding: 5,
    paddingTop: 8
  },

  header: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
    flex: 1,
    paddingRight: 10,
    fontFamily: 'merriweather-Light'
  },

  head : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  }
});
