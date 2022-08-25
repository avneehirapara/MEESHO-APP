import { View, Image, StyleSheet, TouchableOpacity, StatusBar, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../assets/colors/colors'

export default function ProductDetails() {
    return (
        <ScrollView>
            {/* -----------------------------------SatusBar ----------------------------------------- */}
            <StatusBar backgroundColor="#F2F3F4" barStyle="dark-content" />

            <View style={styles.container}>

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
                <TouchableOpacity>
                   <View style={{flexDirection:'row'}}>
                   <AntDesign  name='shoppingcart'/>
                    <Text>Add to Cart</Text>
                   </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 16
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
        top: 10,
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
        backgroundColor: '#3A3A3A',
        marginLeft: 15,
        marginTop: 10,
    },
    red: {
        height: 25,
        width: 25,
        borderRadius: 50,
        backgroundColor: 'red',
        marginLeft: 15,
        marginTop: 10,
    },
    blue: {
        height: 25,
        width: 25,
        borderRadius: 50,
        backgroundColor: '#0000FF',
        marginLeft: 15,
        marginTop: 10,
    },
    green: {
        height: 25,
        width: 25,
        borderRadius: 50,
        backgroundColor: '#00FF47',
        marginLeft: 15,
        marginTop: 10,
    },
    ShortImg: {
        height: 75,
        width: 75,
        marginTop: 20,
        marginLeft: 20,
    },
    inputBox: {
        marginTop: 20,


    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 60,
        marginTop: 20,
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: 'gray',
        padding: 5,
    },
    cart: {
        backgroundColor: colors.secondary,
        marginTop: 34,
        marginLeft: 15,
        marginRight: 15,
        height: 40,
        width: 163,
        borderRadius: 5

    },
    buy: {
        backgroundColor: 'red',
        marginTop: 34,
        marginLeft: 15,
        marginRight: 15,
        height: 40,
        width: 163,
        backgroundColor: colors.primary,
        borderRadius: 5

    },
    CartText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 19,
        textAlign: 'center',
        marginTop: 10,
    },
    BuyText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 19,
        textAlign: 'center',
        marginTop: 10,
        color: colors.white
    },


})