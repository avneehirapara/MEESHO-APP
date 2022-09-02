import { View, Image, StyleSheet, TouchableOpacity, StatusBar, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../assets/colors/colors'

export default function ProductDetails({ navigation }) {
    return (
        <ScrollView>
            {/* -----------------------------------SatusBar ----------------------------------------- */}
            <StatusBar backgroundColor="#F2F3F4" barStyle="dark-content" />

            <View style={styles.container}>

                  {/* ------------------------back arrow------------------ */}

                  <View style={{flexDirection:'row'}}>
                    <TouchableOpacity  onPress={() => navigation.goBack()}>
                    < Ionicons name='ios-chevron-back' style={styles.backIcon} />
                    </TouchableOpacity>
                    {/* <Text style={{fontFamily:'Montserrat-Medium', fontSize:20,color:'black',marginLeft:5}}>Dress</Text> */}
                    </View>
                {/* --------------------IMAGED------------------------------ */}
                <View style={styles.BgImg}>
                    <Image source={require('../assets/images/d.jpg')} />
                </View>
                {/* --------------------fevorite icon----------------------------- */}
                <View style={styles.heartBox}>
                    <TouchableOpacity>
                        <MaterialIcons name="favorite-border" style={styles.imageIcon} color="#000" size={20} />
                    </TouchableOpacity>
                </View>
                {/* --------------------BIg Font----------------------------- */}

                <View>
                    <Text style={styles.BigFonts}>Westen Women Cloth </Text>
                </View>
                {/* --------------------Price----------------------------- */}

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.price}>$115.00</Text>
                        <View>
                            <Text style={styles.Rate}>4.9</Text>
                            <AntDesign name='staro' />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.heading}>Discription</Text>
                    <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, dui suscipit netus sit quis elementum. Quam purus enim mauris malesuada risus. Ornare ut felis, quisque dui eu in gravida. Lectus pharetra auctor sem orci. </Text>
                </View>
                <View>
                    <Text style={styles.heading}>Specification</Text>
                    <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, dui suscipit netus sit quis elementum. Quam purus enim mauris malesuada risus. Ornare ut felis, quisque dui eu in gravida. Lectus pharetra auctor sem orci. </Text>
                </View>
                <View>
                    <Text style={styles.heading}>Size</Text>
                    <View style={styles.list}>

                        <TouchableOpacity style={[styles.listing, styles.change]} ><Text style={[styles.listText, styles.changeText]}>s</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.listing}><Text style={styles.listText}>M</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.listing} ><Text style={styles.listText}>L</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.listing}><Text style={styles.listText}>X</Text></TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.heading}>colors</Text>
                    <View style={styles.colorsROw}>
                        <TouchableOpacity style={styles.black}></TouchableOpacity>
                        <TouchableOpacity style={styles.red}></TouchableOpacity>
                        <TouchableOpacity style={styles.blue}></TouchableOpacity>
                        <TouchableOpacity style={styles.green}></TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.heading}>Rating & Reviews</Text>
                    <Text style={[styles.lorem, { fontFamily: 'Montserrat-SemiBold' }]}>Jane Cooper  - 27-Jul-2021 </Text>
                    <Text style={styles.lorem}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </Text>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View >
                        <TouchableOpacity style={styles.cart}>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name='shoppingcart' style={styles.carIcon} />
                                <Text style={styles.carT}>Add to Cart</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.cart, { backgroundColor: colors.pink, borderColor:colors.pink}]}>
                            <View style={{ flexDirection: 'row' }}>
                                <AntDesign name='doubleright' style={[styles.carIcon ,{ color: 'white' }]} />
                                <Text style={[styles.carT, { color: 'white' }]}>Buy Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginLeft:16,
        // marginRight:16
    },
    backIcon:{
        fontSize:30,
        color:'black',
        marginLeft:5,
        marginBottom:5
      },
    BgImg: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        alignSelf: 'center',
        height: 450,
        width: 400
    },
    heartBox: {
        height: 25,
        width: 25,
        borderRadius: 25,
        position: 'absolute',
        top: 50,
        right: 20,
        backgroundColor: 'white',
    },

    imageIcon: {
        alignSelf: 'center',
        top: 3
    },
    BigFonts: {
        marginTop: 26,
        marginLeft: 16,
        marginRight: 14,
        fontSize: 20,
        alignSelf: 'flex-start',
        color: colors.black,
        fontFamily: 'Montserrat-SemiBold',


    },
    price: {
        marginTop: 10,
        marginLeft: 16,
        marginRight: 267,
        fontSize: 21,
        alignSelf: 'flex-start',
        color: colors.primary,
        fontFamily: 'Montserrat-SemiBold',
    },
    Rate: {
        fontFamily: 'Montserrat-SemiBold',
        alignSelf: 'flex-end',
        fontSize: 20,
        bottom: 25
    },
    lorem: {
        fontFamily: 14,
        color: colors.black,
        marginTop: 10,
        alignSelf: 'flex-start',
        fontFamily: 'Montserrat-Regular',
        marginLeft: 16,
    },
    list: {
        flexDirection: 'row',
        marginLeft: 15
    },
    listText: {
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        fontFamily: 'Montserrat-Medium',
        color: 'black'
    },
    listing: {
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        width: 40,
        marginTop: 10,
        marginRight: 11
    },
    change: {
        backgroundColor: colors.pink,

    },
    changeText: {
        color: '#ffff'
    },
    heading: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.black,
        marginTop: 20,
        marginLeft: 15
    },
    colorsROw: {
        flexDirection: 'row'
    },
    black: {
        height: 25,
        width: 25,
        borderRadius: 50,
        backgroundColor:colors.blue,
        marginLeft: 15,
        marginTop: 10,
    },
    red: {
        height: 25,
        width: 25,
        borderRadius: 50,
        backgroundColor:colors.softgreen,
        marginLeft: 15,
        marginTop: 10,
    },
    blue: {
        height: 25,
        width: 25,
        borderRadius: 50,
        backgroundColor: colors.softpink,
        marginLeft: 15,
        marginTop: 10,
    },
    green: {
        height: 25,
        width: 25,
        borderRadius: 50,
        backgroundColor: colors.softblue,
        marginLeft: 15,
        marginTop: 10,
    },

    cart: {
        marginTop: 20,
        borderWidth: 1,
        borderRadius:5,
        padding: 10,
        width: 150,
        marginLeft: 30,
       

    },
    carIcon: {
        marginTop: 2,
        marginRight: 5,
        fontSize: 20,
        color: 'black',
        
    },
    carT: {
        fontSize: 17,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Montserrat-Regular',

    }

})
