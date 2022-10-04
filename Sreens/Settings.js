import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          < Ionicons name='ios-chevron-back' style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 20, color: 'black', marginLeft: 5 }}>back</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('LogOutScreen')}>
        <Text>LOG Out Settings Screen</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  backIcon: {
    fontSize: 30,
    color: 'black',
    marginLeft: 5
  }
})