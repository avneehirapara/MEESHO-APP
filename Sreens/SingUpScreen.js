import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Ionicons from '@react-native-firebase/Ionicons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogInUser } from '../Sreens/redux/action/LogIn.action'
import { signupUser } from './redux/action/Auth.action';


export default function SingUpScreen({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const dispatch = useDispatch();
  const auth1 = useSelector(state => state.user)


  const handleSignup = () => {
    // console.log({ email, password ,name });
    dispatch(signupUser({ email, password ,name }))
  }
  return (
    <View style={styles.container}>

      {/* ----------------------WELCOME BOX --------------------- */}
      <View style={styles.wellComeBOX}>
        <Text style={styles.welcome}>Welcome! </Text>
        <Text style={styles.EnterData}>Enter your data to continue</Text>
      </View>
         {/* ----------------------NAme INPUT --------------------- */}
         <View style={styles.NameBox}>
         <AntDesign name='user' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder=' Enter Your Full Name'
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setName(text)}
        />
      </View>
      {/* ----------------------MOBILE INPUT --------------------- */}
      <View style={styles.MobileBox}>   
        <Feather name='voicemail' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder='Enter Your Email Id'
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      {/* ----------------------LOCK INPUT --------------------- */}
      <View style={styles.LockBox}>
        <Feather name='lock' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder='Enter Your Password'
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity>
          <AntDesign name='eyeo' style={styles.eyeIcon} />
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
          {/* ----------------------google ICON --------------------- */}
          <View>
            <TouchableOpacity onPress={() => handleGoogleAuth()}>
              <AntDesign name='google' style={styles.IconsBoxes} />
            </TouchableOpacity>
          </View>
        {/* ----------------------APPLE ICON --------------------- */}
        <View>
          <TouchableOpacity>
            <AntDesign name='apple1' style={styles.IconsBoxes} />
          </TouchableOpacity>
        </View>
        {/* ----------------------TWITER ICON --------------------- */}
        {/* <View>
          <TouchableOpacity>
            <AntDesign name='twitter' style={[styles.IconsBoxes, { color: '#1DA1F2' }, { marginTop: 59 }]} />
          </TouchableOpacity>
        </View> */}

      </View>

      {/* ----------------------SIGN UP BUTTON --------------------- */}
      <TouchableOpacity
        onPress={() => handleSignup()}>
        <View style={styles.SinUpInButton}>

          <Text style={styles.SignInText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      {/* ----------------------SIGN up line --------------------- */}
      <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'center' }}>
        <Text style={styles.user}>Already a user ??</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LogInPage')}>
          <Text style={[styles.LOGIN, { color:colors.pink }]}>Log In</Text>
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
  MenuIcon: {
    margin: 10,
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
  NameBox:{
    flexDirection: 'row',
    // backgroundColor: colors.secondary,
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 57,
    alignSelf: 'center',
    // borderWidth:1,
    borderBottomWidth: 1,
    top:35

  },

  MobileBox: {
    flexDirection: 'row',
    // backgroundColor: colors.secondary,
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 57,
    alignSelf: 'center',
    // borderWidth:1,
    borderBottomWidth: 1

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
    // backgroundColor: '#D6DBDF',
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 57,
    alignSelf: 'center',
    marginTop: 20,
    // borderWidth:1,
    borderBottomWidth: 1
  },
  eyeIcon: {
    marginTop: 15,
    marginLeft: -30,
    marginBottom: 11,
    fontSize: 20,
    justifyContent: 'flex-end'
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
    fontSize: 30,
    marginTop: 60,
    marginRight: 20,
    color:'black',
  },

  SinUpInButton: {
    height: 50,
    width: 325,
    backgroundColor: colors.pink,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 61,

  },
  SignInText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20,
    color: 'white'
  },
  user: {
    color: 'gray',
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
    marginTop: 10,
  },
  LOGIN: {
    fontFamily: 'Montserrat-Regular',
    marginTop: 10,
    left: 10,
  }
})
