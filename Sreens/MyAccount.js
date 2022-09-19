import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../assets/colors/colors';
import { iconss } from '../assets/icons';

export default function MyAccount() {
  return (
    <ScrollView>
    <View style={Styles.container}>
      {/* -----------------------------------TOP ICONS ----------------------------------------- */}
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableOpacity>
          <AntDesign name='search1' style={Styles.TOPhIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name='shoppingcart' style={Styles.TOPhIcon} />
        </TouchableOpacity>
      </View>
      {/* -----------------------------------USER ICON ----------------------------------------- */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Image style={Styles.UserImg} source={iconss.user} />
        </TouchableOpacity>
        {/* /* -----------------------------------USER ICON ----------------------------------------- */}
        <Text style={Styles.IDText}> Avnee Hirapara</Text>
      </View>
      {/* /* -----------------------------------HELP CENTER----------------------------------------- */}
      <View>
        <View >
          <TouchableOpacity style={Styles.HelpBox} >
            <TouchableOpacity>
              <Feather name='help-circle' style={Styles.HelpIcon} />
            </TouchableOpacity>
            <Text style={Styles.HelpText}>Help center</Text>
          </TouchableOpacity>
        </View>
        {/* /* -----------------------------------LANGUAGE----------------------------------------- */}
        <View >
          <TouchableOpacity style={Styles.Box} >
            <TouchableOpacity>
              <Ionicons name='language' style={Styles.Icon} />
            </TouchableOpacity>
            <Text style={Styles.IconText}> Change Lnguage</Text>
          </TouchableOpacity>
        </View>
         {/* /* -----------------------------------BANK----------------------------------------- */}
         <View >
          <TouchableOpacity style={Styles.Box} >
            <TouchableOpacity>
              <MaterialCommunityIcons name='bank-outline' style={Styles.Icon} />
            </TouchableOpacity>
            <Text style={Styles.IconText}>My Bank & UPI Details</Text>
          </TouchableOpacity>
        </View>
        {/* /* -----------------------------------MY SHARE PRODUCT----------------------------------------- */}
        <View >
          <TouchableOpacity style={Styles.Box} >
            <TouchableOpacity>
              <Feather name='share-2' style={Styles.Icon} />
            </TouchableOpacity>
            <Text style={Styles.IconText}>my share product</Text>
          </TouchableOpacity>
        </View>
          {/* /* -----------------------------------MY PAYMENT----------------------------------------- */}
          <View >
          <TouchableOpacity style={Styles.Box} >
            <TouchableOpacity>
              {/* <FontAwesome5Brands name='google-pay' style={Styles.Icon} /> */}
            </TouchableOpacity>
            <Text style={Styles.IconText}>my payment</Text>
          </TouchableOpacity>
        </View>
          {/* /* -----------------------------------SPINS----------------------------------------- */}
          {/* <View >
          <TouchableOpacity style={Styles.Box} >
            <TouchableOpacity>
              <EvilIcons name='spinner' style={Styles.Icon} />
            </TouchableOpacity>
            <Text style={Styles.IconText}>spins</Text>
          </TouchableOpacity>
        </View> */}
          {/* /* -----------------------------------MY FOLLOWED SHOPE----------------------------------------- */}
          <View >
          <TouchableOpacity style={Styles.Box} >
            <TouchableOpacity>
              <MaterialCommunityIcons name='shopping-outline' style={Styles.Icon} />
            </TouchableOpacity>
            <Text style={Styles.IconText}>my followed shope</Text>
          </TouchableOpacity>
        </View>
          {/* /* -----------------------------------BUSINESS LOgo----------------------------------------- */}
          <View >
          <TouchableOpacity style={Styles.Box} >
            <TouchableOpacity>
              <Ionicons name='business-outline' style={Styles.Icon} />
            </TouchableOpacity>
            <Text style={Styles.IconText}>business logo</Text>
          </TouchableOpacity>
        </View>
         {/* /* -----------------------------------settings----------------------------------------- */}
         <View >
          <TouchableOpacity style={Styles.Box} >
            <TouchableOpacity>
              <AntDesign name='setting' style={Styles.Icon} />
            </TouchableOpacity>
            <Text style={Styles.IconText}>settings</Text>
          </TouchableOpacity>
        </View>
         {/* /* -----------------------------------rate meesho----------------------------------------- */}
         <View >
          <TouchableOpacity style={Styles.Box} >
            <TouchableOpacity>
              <AntDesign name='staro' style={Styles.Icon} />
            </TouchableOpacity>
            <Text style={Styles.IconText}>rate meesho</Text>
          </TouchableOpacity>
        </View>
         {/* /* ----------------------------------polices----------------------------------------- */}
         <View >
          <TouchableOpacity style={Styles.Box} >
            <TouchableOpacity>
              <MaterialCommunityIcons name='police-badge-outline' style={Styles.Icon} />
            </TouchableOpacity>
            <Text style={Styles.IconText}>legal and policies</Text>
          </TouchableOpacity>
        </View>
      </View>
       {/* ----------------------MEESHO BANNER --------------------- */}
       <View style={Styles.meeshoImg}>
          <Image source={require('../assets/images/lmeesho.png')} />
        </View>
    </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  container: {
    margin: 16,
    // backgroundColor: colors.secondary
  },
  TOPhIcon: {
    fontSize: 25,
    color: colors.black,
    marginRight: 3,
    marginLeft: 3
  },
  UserImg: {
    height: 50,
    width: 50
  },
  IDText: {
    fontFamily: 'Montserrat-SemiBold',
    left: 30,
    top: 15,
    fontSize: 20
  },
  HelpBox: {
    flexDirection: 'row',
    // backgroundColor:colors.secondary,
    padding: 10,
    marginTop: 35,
    borderWidth: 3,
    borderColor:colors.secondary
  },
  HelpIcon: {
    fontSize: 25,
    color: colors.black
  },
  HelpText: {
    fontSize: 15,
    color: colors.black,
    fontFamily: 'Montserrat-Medium',
    left: 20
  },
  Box: {
    flexDirection: 'row',
    // backgroundColor:colors.secondary,
    padding: 10,
    marginTop:3,
    borderWidth: 3,
    borderColor:colors.secondary
  },
  Icon: {
    fontSize: 25,
    color: colors.black
  },
  IconText: {
    fontSize: 15,
    color: colors.black,
    fontFamily: 'Montserrat-Medium',
    left: 20,
    textTransform: 'capitalize'
  },
  meeshoImg: {
    alignSelf: 'center',
    marginTop: 23,
    
  },
})