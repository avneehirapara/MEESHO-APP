import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';


export default function LogInPage({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUserEmail = () => {
    console.log(email, password);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <View>
        {/* ----------------------CORSS ICON --------------------- */}
        <TouchableOpacity>
          <Entypo name='cross' style={styles.crossIcon} ></Entypo>
        </TouchableOpacity>
      </View>
      {/* ----------------------WELCOME BOX --------------------- */}
      <View style={styles.wellComeBOX}>
        <Text style={styles.welcome}>Welcome! </Text>
        <Text style={styles.EnterData}>Enter your data to continue</Text>
      </View>
      {/* ----------------------MEESHO BANNER --------------------- */}
      <View style={styles.meeshoImg}>
        <Image source={require('../assets/images/meesho1.png')} />
      </View>
      {/* ----------------------MOBILE INPUT --------------------- */}
      <View style={styles.MobileBox}>
        <MaterialIcons name='phone' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder='Email Id'
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      {/* ----------------------LOCK INPUT --------------------- */}
      <View style={styles.LockBox}>
        <FontAwesome name='lock' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity>
          <AntDesign name='eye' style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>
      {/* ----------------------FORGIT PASS--------------------- */}
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity>
          <MaterialIcons name='crop-square' style={styles.squarIcon}></MaterialIcons>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Remeberme}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Forgotpass}>Forgot password ?</Text>
        </TouchableOpacity>
      </View>
      {/* ----------------------NINE BOX  --------------------- */}
      <View style={styles.ORbox}>
        <View style={styles.FirstBorder}></View>
        <Text style={styles.OR}>OR</Text>
        <View style={styles.SecondBorder}></View>
      </View>
      {/* ----------------------IMAGESSS --------------------- */}
      <View style={styles.IconsBox}>
        {/* ----------------------FACE BOOK ICON --------------------- */}
        <View>
          <TouchableOpacity>
            <AntDesign name='facebook-square' style={[styles.IconsBoxes, { color: '#5587EB' }]} />
          </TouchableOpacity>
        </View>
        {/* ----------------------APPLE ICON --------------------- */}
        <View>
          <TouchableOpacity>
            <AntDesign name='apple1' style={[styles.IconsBoxes, { color: '#2B2B2B' }]} />
          </TouchableOpacity>
        </View>
        {/* ----------------------TWITER ICON --------------------- */}
        <View>
          <TouchableOpacity>
            <FontAwesome name='twitter-square' style={[styles.IconsBoxes, { color: '#1DA1F2' }]} />
          </TouchableOpacity>
        </View>

      </View>

      {/* ----------------------SIGN IN BUTTON --------------------- */}
      <TouchableOpacity onPress={() => createUserEmail()}>
        <View style={styles.SignInButton}>

          <Text style={styles.SignInText}>sign in</Text>
        </View>
      </TouchableOpacity>

      {/* ----------------------SIGN up line --------------------- */}
      <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'center' }}>
        <Text style={styles.SingUPText}>Didn’t have any account?</Text>
        {/* onPress={() =>navigation.navigate('HomeSreen')} */}
        <TouchableOpacity >
          <Text style={[styles.SingUPText, { color: colors.primary }]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft:15,
    // marginRight:15   
  },
  crossIcon: {
    flex: 1,
    color: 'black',
    marginTop: 11,
    marginLeft: 341,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontSize: 30,
    alignSelf: 'flex-end'
  },
  wellComeBOX: {
    height: 53,
    width: 200,
    alignSelf: 'center',
    marginTop: 15,

  },
  welcome: {
    width: 125,
    height: 29,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.pink,
    fontSize: 24,
    marginBottom: 6,
    alignSelf: 'center'

  },
  EnterData: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },

  meeshoImg: {
    alignSelf: 'center',
    marginTop: 23,

  },

  MobileBox: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 57,
    alignSelf: 'center'

  },

  InputIcon: {
    marginRight: 9,
    marginLeft: 20,
    marginTop: 16,
    marginBottom: 11,
    fontSize: 20,
    color: colors.black
  },
  TextInput: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    alignSelf: 'center',
    width: 300,
  },
  LockBox: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 57,
    alignSelf: 'center',
    marginTop: 20,
  },
  eyeIcon: {
    marginTop: 15,
    marginLeft: -30,
    marginBottom: 11,
    fontSize: 20,
    justifyContent: 'flex-end'
  },
  squarIcon: {
    marginLeft: 25,
    marginTop: 12,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 'bold'       //=========font weight ===========//
  },
  Remeberme: {
    marginRight: 61,
    marginTop: 12,
    fontFamily: 'Montserrat-Regular',
  },
  Forgotpass: {
    marginLeft: 11,
    marginTop: 12,
    fontFamily: 'Montserrat-Regular',
  },
  ORbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 61
  },
  FirstBorder: {
    borderWidth: 1,
    width: '30%',
    borderColor: 'gray'
  },
  OR: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    marginRight: 10,
    marginLeft: 10,
  },
  SecondBorder: {
    borderWidth: 1,
    width: '30%',
    borderColor: 'gray'
  },
  IconsBox: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  IconsBoxes: {
    fontSize: 40,
    marginTop: 61,
    marginRight: 20,
  },

  SignInButton: {
    height: 50,
    width: 325,
    backgroundColor: colors.pink,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 61,

  },
  SignInText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
    marginTop: 15,
  },
  SingUPText: {
    fontFamily: 'Montserrat-Regular',
    marginRight: 6
  }
})