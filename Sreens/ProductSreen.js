import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, Span, Placeholder, TextInput, StatusBar } from 'react-native'
import React from 'react'
import { iconss } from '../assets/icons';
import { colors } from '../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeSreen from './HomeSreen';

export default function ProductSreen({navigation}) {

    // / ============================================  Flatlist 1 =================================================

    const PRODUCTDATA = [
        // {
        //     id: 1,
        //     image: require('../assets/images/a.avif'),
        //     product: 'westen',
        // },


        {
            id: 1,
            image: require('../assets/images/womencloth1.webp'),
            product: 'Dress',
            price: '1000',
        },
        {
            id: 2,
            image: require('../assets/images/wc2.webp'),
            product: 'Denim Jeans',
            price: '1200',
        },
        {
            id: 3,
            image: require('../assets/images/wc3.webp'),
            product: 'Tops',
            price: '1020',
        },
        {
            id: 4,
            image: require('../assets/images/wc4.webp'),
            product: 'Danim jacket',
            price: '2000',
        },
        {
            id: 5,
            image: require('../assets/images/d.jpg'),
            product: 'Party Ware',
            price: '2000',
        },
        {
            id: 6,
            image: require('../assets/images/wc3.webp'),
            product: 'Denim Jeans',
            price: '1200',
        },
        {
            id: 7,
            image: require('../assets/images/sc6.webp'),
            product: 'Top',
            price: '1200',
        },
        {
            id: 8,
            image: require('../assets/images/womencloth1.webp'),
            product: 'Dress',
            price: '1000',
        },
    ]

    const WomenClothDAta = ({ item }) => {
        console.log("item");
        return (

            <TouchableOpacity  onPress={()=>navigation.navigate('ProductDetails')}>
                <View style={Styles.card}>
                    <View>
                        <Image style={Styles.images1} source={item.image} />
                    </View>
                    <View style={Styles.heartBox}>
                        <TouchableOpacity>
                            <MaterialIcons name="favorite-border" style={Styles.imageIcon} color="#000" size={20} />
                        </TouchableOpacity>
                    </View>

                    <Text style={Styles.cardText1}>{item.product}</Text>
                    <Text style={Styles.cardText2}><Text style={Styles.dolar}>$</Text>{item.price}</Text>
                    <TouchableOpacity style={Styles.pluseBox}>
                        <AntDesign name='plussquare' style={Styles.plusIcon}></AntDesign>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>


        )
    }
    {/* ------------------flatlist 1---------------------------------- */ }

    return (
        <ScrollView>
             {/* -----------------------------------SatusBar ----------------------------------------- */}
        <StatusBar backgroundColor="#F2F3F4" barStyle="dark-content" />

            <View style={Styles.container}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity  onPress={() => navigation.goBack()}>
                    < Ionicons name='ios-chevron-back' style={Styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={{fontFamily:'Montserrat-Medium', fontSize:20,color:'black',marginLeft:5}}>Dress</Text>
                    </View>
                <View>
                    <FlatList
                        numColumns={2}
                        showsVerticalScrollIndicatorScrollIndicator={false}
                        data={PRODUCTDATA}
                        renderItem={WomenClothDAta}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container: {
        // marginLeft:16,
        // marginRight:16,
        margin:16
    },
    backIcon:{
      fontSize:30,
      color:'black',
      marginLeft:5
    },
    card: {
        height: 280,
        width: 165,
        backgroundColor: '#F3F3F3',
        marginBottom: 15,
        marginLeft: 7,
        marginRight: 15,
        marginTop: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },

    images1: {
        height: 230,
        width: 165,
        borderRadius: 5,
        alignSelf: 'center'
    },
    heartBox: {
        height: 25,
        width: 25,
        borderRadius: 25,
        position: 'absolute',
        top: 10,
        right: 20,
        backgroundColor: 'white'
    },

    imageIcon: {
        alignSelf: 'center',
        top: 3
    },
    cardText1: {
        color: 'black',
        fontSize: 13,
        lineHeight: 25,
        fontFamily: 'Montserrat-Medium',
        marginHorizontal: 10,
    },
    cardText2: {
        color: 'black',
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Montserrat-Bold',
        marginHorizontal: 10,
    },
    pluseBox: {
        position: 'absolute',
        left: 130,
        top: 245,
    },
    plusIcon: {
        fontSize: 25,
    },
})