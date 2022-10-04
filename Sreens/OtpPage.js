
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { color } from 'react-native-reanimated';
import { colors } from '../assets/colors/colors';


export default function OtpPage({navigation}) {
  const [otp, setOtp] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10, marginTop: 90 }}>
        <Text style={styles.Text}>Verify Your Phone Number</Text>
      </View>
      <View style={{ marginBottom: 50, marginTop: 30 }}>
        <Text style={[styles.Text,{fontSize:13}]}>Enter your OTP code here !!</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            placeholderTextColor="#003f5c"
            onChangeText={(otp) => setOtp(otp)}
            keyboardType={'phone-pad'}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            placeholderTextColor="#003f5c"
            onChangeText={(otp) => setOtp(otp)}
            keyboardType={'phone-pad'}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            placeholderTextColor="#003f5c"
            onChangeText={(otp) => setOtp(otp)}
            keyboardType={'phone-pad'}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            placeholderTextColor="#003f5c"
            onChangeText={(otp) => setOtp(otp)}
            keyboardType={'phone-pad'}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            placeholderTextColor="#003f5c"
            onChangeText={(otp) => setOtp(otp)}
            keyboardType={'phone-pad'}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            placeholderTextColor="#003f5c"
            onChangeText={(otp) => setOtp(otp)}
            keyboardType={'phone-pad'}
          />
        </View>

      </View>
      <TouchableOpacity style={styles.ConBtn} onPress={() => { navigation.navigate("ConformPass") }}>
        <Text style={styles.ConText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  Text:{
    color: "black",
     fontSize:20,
      fontFamily: 'Montserrat-SemiBold' 
  },
  inputView: {
    // backgroundColor: "#F1F3F3",
    // borderRadius:,
    borderBottomWidth:1,
    width: 40,
    height: 40,
    marginBottom: 20,
    alignItems: "center",
    marginRight:15
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    color: "black"
  },

  ConBtn: {
    width:250,
    borderRadius:10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:colors.pink,
    marginTop: 30
  },
  ConText: {
    fontFamily: 'Montserrat-SemiBold',
    // letterSpacing: 2,
    color: "white",
    fontSize: 16
  }
})