import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../assets/colors/colors';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser, LoginUser, googleLogin } from '../Sreens/redux/action/Auth.action'
import { ScrollView } from 'react-native-gesture-handler';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export default function LogInPage({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();

  const auth1 = useSelector(state => state.user)

  const handleSignIn = () => {
    dispatch(LoginUser({ email, password }))
  }

  useEffect(() =>{
    GoogleSignin.configure({
      webClientId: '922284526746-fun2p8n2kkf024akdu32aubrrnvcc5rh.apps.googleusercontent.com',
     offlineAccess:true
    });    
  }, [])

  const onGoogleButtonPress = async () => {
    dispatch(googleLogin())
  }





  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            < Ionicons name='ios-chevron-back' style={styles.backIcon} />
          </TouchableOpacity>
        </View>

        {/* ----------------------WELCOME BOX --------------------- */}
        <View style={styles.wellComeBOX}>
          <Text style={styles.welcome}>Welcome! </Text>
          <Text style={styles.EnterData}>Enter your data to continue</Text>
        </View>
        {/* ----------------------EMAIL INPUT --------------------- */}
        <View style={styles.MobileBox}>
          <Feather name='voicemail' style={styles.InputIcon} />
          <TextInput style={styles.TextInput}
            placeholder='Email Id'
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        {/* ----------------------LOCK INPUT --------------------- */}
        <View style={styles.LockBox}>
          <Feather name='lock' style={styles.InputIcon} />
          <TextInput style={styles.TextInput}
            placeholder='Password'
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity>
            <AntDesign name='eyeo' style={styles.eyeIcon} />
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
          <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')}>
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
          {/* ----------------------google ICON --------------------- */}
          <View>
            <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
              <AntDesign name='google' style={styles.IconsBoxes} />
            </TouchableOpacity>
          </View>
          {/* ----------------------APPLE ICON --------------------- */}
          <View>
            <TouchableOpacity>
              <AntDesign name='apple1' style={[styles.IconsBoxes]} />
            </TouchableOpacity>
          </View>
          {/* ----------------------TWITER ICON --------------------- */}
          {/* <View>
            <TouchableOpacity>
              <AntDesign name='twitter' style={[styles.IconsBoxes, { color: '#1DA1F2' }, { marginTop: 62 }]} />
            </TouchableOpacity>
          </View> */}

        </View>

        {/* ----------------------SIGN IN BUTTON --------------------- */}

        <TouchableOpacity
          onPress={() =>{
            handleSignIn();
          } } >
          <View style={styles.SingUPButton}>

            <Text style={styles.SignInText}>Log In</Text>
          </View>
        </TouchableOpacity>

        {/* ----------------------SIGN up line --------------------- */}
        <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'center' }}>
          <Text style={styles.SingUPText}>Didn’t have any account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SingUpScreen')}>
            <Text style={[styles.SingUPText1, { color:colors.pink }]}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>


  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
    // marginLeft:15,
    // marginRight:15   
  },
  backIcon: {
    fontSize: 30,
    color: 'black',
    marginLeft: 5
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
    fontSize: 30,
    marginTop: 60,
    marginRight: 20,
    color:'black'
  },

  SingUPButton: {
    height: 50,
    width: 325,
    backgroundColor: colors.pink,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 61,

  },
  SignInText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20,
    color: 'white'
  },
  SingUPText: {
    color: 'gray',
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
    marginTop: 10,
  },
  SingUPText1: {
    fontFamily: 'Montserrat-Regular',
    marginTop: 10,
    left: 10
  }
})