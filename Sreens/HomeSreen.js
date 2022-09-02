import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, Span, Placeholder, TextInput, StatusBar } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react'
import { colors } from '../assets/colors/colors';


export default function HomeSreen({ navigation }) {

  // / ============================================  Flatlist 1 =================================================

  const DATA = [
    {
      id: 1,
      image: require('../assets/images/newgirl.webp'),
      product: 'westen',
    },
    {
      id: 2,
      image: require('../assets/images/men.jpg'),
      product: 'men cloths',
    },
    {
      id: 3,
      image: require('../assets/images/newkid.jpeg'),
      product: 'kids cloth',
    },
    {
      id: 4,
      image: require('../assets/images/kurat.jpg'),
      product: 'kurati',
    },
    {
      id: 5,
      image: require('../assets/images/jwallary.jpg'),
      product: 'jwallary',
    },
    {
      id: 6,
      image: require('../assets/images/heelssss.jpg'),
      product: 'heels',
    },
    {
      id: 7,
      image: require('../assets/images/westen.jpg'),
      product: 'westen',
    }

  ]

  const ClothDAta = ({ item }) => {
    console.log("item");
    return (

      <TouchableOpacity
        onPress={() => navigation.navigate('ProductSreen')}>
        <View style={Styles.card}>
          <Image source={item.image} style={Styles.TopImg} />
          <Text style={Styles.Imgtext}>{item.product} </Text>
        </View>
      </TouchableOpacity>

    )

  }

  // / ============================================  Flatlist 2 =================================================


  const DATA1 = [
    {
      id: 1,
      image: require('../assets/images/newmachine.webp'),
      product: 'home',
    },
    // {
    //   id: 2,
    //   image: require('../assets/images/newkid.jpeg'),
    //   product: 'kids cloth',
    // },
    {
      id: 3,
      image: require('../assets/images/heelssss.jpg'),
      product: 'heels',
    },
    {
      id: 4,

      image: require('../assets/images/newelectick.jpeg'),
      product: 'electronics',
    },
    {
      id: 5,
      image: require('../assets/images/newsaeww.jpg'),
      product: 'sarees',
    },
    {
      id: 6,
      image: require('../assets/images/newmackup.jpg'),
      product: 'mackup',
    },

  ]

  const TopSelling = ({ item }) => {
    console.log("item");
    return (

      <TouchableOpacity onPress={() => navigation.navigate('ProductSreen')}>
        <View style={Styles.card}>
          <Image source={item.image} style={Styles.TopSellImg} />
          <Text style={Styles.TopSellText}>{item.product} </Text>
        </View>
      </TouchableOpacity>

    )

  }
  // / ============================================  Flatlist 3=================================================


  const DATA3 = [
    {
      id: 1,
      product: 'UNDER 99$',
      price: 'under 99$',
    },
    {
      id: 2,
      product: 'UNDER 199$',
      price: 'under 199$',
    },
    {
      id: 3,
      product: 'UNDER 299$',
      price: 'under 299$',
    },
    {
      id: 4,
      product: 'UNDER 399$',
      price: 'under 399$',
    },
    {
      id: 5,
      product: 'UNDER 499$',
      price: 'under 499$',
    },
    {
      id: 6,
      product: 'UNDER 599$s',
      price: 'under 599$',
    },
    {
      id: 7,
      product: 'UNDER 699$',
      price: 'under 699$',
    }

  ]

  const PriceDATA = ({ item }) => {
    console.log("item");
    return (
      <View>
        <TouchableOpacity style={Styles.Pricecard} onPress={() => navigation.navigate('ProductSreen')}>
          <Text style={Styles.PriceText}>{item.product} </Text>
        </TouchableOpacity>
        <View>
          <Text style={Styles.PriceText1}>{item.price} </Text>
        </View>
      </View>
    )

  }


  return (
    <ScrollView>
      <View style={Styles.container}>
        {/* -----------------------------------SatusBar ----------------------------------------- */}
        <StatusBar backgroundColor="#F2F3F4" barStyle="dark-content" />

        {/* -----------------------------------Top Icons ----------------------------------------- */}
        <View>
          <View style={{ position: "relative" }}>
            <Feather name='menu' onPress={() => navigation.toggleDrawer()} style={Styles.menu} />
          </View>
          <View style={Styles.TopIcons}>
            <TouchableOpacity>
              <MaterialIcons name='favorite-outline' size={25} color='black' style={{ marginRight: 15 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='notifications-outline' size={25} color='black' style={{ marginRight: 15 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name='shoppingcart' size={25} color='black' style={{ marginRight: 15 }} />
            </TouchableOpacity>
          </View>
        </View>
        {/* -----------------------------------Search Icons ----------------------------------------- */}



        <View style={Styles.SearchBox}>
          <TouchableOpacity>
            <MaterialIcons name='keyboard-voice' style={Styles.Voice} />
          </TouchableOpacity>
          <AntDesign name='search1' style={Styles.searchIcon} />
          <TextInput style={{ fontFamily: 'Montserrat-Medium', width: 350 }}
            placeholder='Find your product'
          />
          {/* ------------------flatlist 1---------------------------------- */}
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={ClothDAta}
            keyExtractor={item => item.id}
          />
        </View>
        {/* --------------------------- Middel Icon---------------------------------- */}

        <View style={Styles.middelicon}>
          <View style={Styles.box}>
            <View style={[Styles.iconBox,{paddingLeft:20}]}>
              <MaterialIcons name='money' size={25} style={Styles.middeliconss} />
              <Text style={Styles.middelText}>Case on </Text>
              <Text style={Styles.middelText}>Delevary</Text>
            </View>
            <View style={Styles.iconBox}>
              <MaterialIcons name='directions-bike' size={25} />
              <Text style={Styles.middelText}>Free </Text>
              <Text style={Styles.middelText}>Delevary</Text>
            </View>
            <View style={[Styles.iconBox,{paddingRight:20}]}>
              <Entypo name='price-tag' size={25} />
              <Text style={Styles.middelText}>Lowest </Text>
              <Text style={Styles.middelText}>Price</Text>
            </View>

          </View>
        </View>
        {/* ------------------flatlist 2---------------------------------- */}
        <View style={{ backgroundColor: '#FFFFFF', marginTop: 15 }}>
          <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 20, marginTop: 20, marginLeft: 25 }}>Top Selling</Text>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA1}
              renderItem={TopSelling}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        {/* ------------------flatlist 3---------------------------------- */}
        <View style={{ backgroundColor: '#FFFFFF', marginTop: 15 }}>
          <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 20, marginTop: 20, marginLeft: 25 }}>Price Store</Text>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA3}
              renderItem={PriceDATA}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}


const Styles = StyleSheet.create({
  container: {
    marginLeft:16,
    marginRight:16
  },
  menu: {
    position: "absolute",
    fontSize: 20,
    Color: 'black',
    top: 7
  },
  TopIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // marginTop: 5,
  },
  SearchBox: {
    flexDirection: 'row',
    height: 50,
    width: 350,
    borderWidth: 1,
    marginTop: 10,
    alignSelf: 'center'
  },
  searchIcon: {
    marginRight: 10,
    marginLeft: 30,
    marginTop: 15,
    fontSize: 20
  },
  Voice: {
    marginLeft: 30,
    marginTop: 15,
    fontSize: 22,
  },
  TopImg: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 30,
    borderColor: colors.pink,
    borderWidth: 2,
    // resizeMode:'stretch'
  },
  Imgtext: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    marginLeft: 30,
    marginTop: 15,
  },
  TopSellImg: {
    height: 140,
    width: 140,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 20,
    // resizeMode: 'stretch',
  },
  TopSellText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 20

  },
  middelicon: {

    backgroundColor: colors.lightblue,
    height: 80,
    marginTop: 20,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBox: {
    alignSelf: 'center',
    padding: 10
  },
  middeliconss: {
    alignSelf: 'center'
  },
  middelText: {
    fontFamily: 'Montserrat-Bold',
  },
  Pricecard: {

    height: 80,
    width: 80,
    borderRadius: 50,
    marginLeft: 30,
    backgroundColor: colors.softblue,
    marginTop: 20,
    borderColor: colors.blue,
    borderWidth: 2,
  },
  PriceText: {
    marginTop: 25,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Bold',
    marginLeft: 15,

  },
  PriceText1: {
    alignSelf: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 20

  },
})