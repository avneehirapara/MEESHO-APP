import { View, TouchableOpacity,Text } from 'react-native'
import React from 'react'

export default function ConformPass({navigation}) {
  return (
    <View>
     <TouchableOpacity onPress={() => { navigation.navigate("Home")}}>
        <Text>
            jsdkhduidudgfu
        </Text>
     </TouchableOpacity>
    </View>
  )
}