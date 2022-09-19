import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, placeholder, TextInput } from 'react-native'
import React from 'react'
import { iconss } from '../assets/icons';
import { colors } from '../assets/colors/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function SearchSreen() {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 42 }}>
                <TouchableOpacity >
                    <Ionicons name='chevron-back'  style={styles.menuIcon}/>
                </TouchableOpacity>
                <View style={styles.SearchBox}>
                    <AntDesign name='search1' style={styles.searchIcon} />
                    <TextInput
                        placeholder='Fine your prodect'
                    />
                </View>
                <TouchableOpacity style={styles.notificationIconBox}>
                    <Image style={styles.notificationIcon} source={iconss.notification} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.searchFor}>Search For ??</Text>
            </View>
            <View style={styles.list}>
                <TouchableOpacity style={{ height: 40, width: 144, backgroundColor:colors.pink, borderRadius: 5, marginRight: 13, marginTop: 10, marginBottom: 30 }}><Text style={{ alignSelf: 'center', textAlignVertical: 'center', marginVertical: 10, fontFamily: 'Montserrat-Medium', color: 'white' }}>Winter Collection</Text></TouchableOpacity>
                <TouchableOpacity style={{ width: 144, height: 40, backgroundColor: '#F3F3F3', borderRadius: 5, marginRight: 13, marginTop: 10, marginBottom: 30 }}><Text style={{ alignSelf: 'center', textAlignVertical: 'center', marginVertical: 10, fontFamily: 'Montserrat-Medium', color: 'balck' }}>Summer Collection</Text></TouchableOpacity>
            </View>
            <View>
                <Text style={styles.searchFor}>Search History </Text>
            </View>
            <View style={styles.list}>
                <TouchableOpacity style={styles.listBox}><Text style={styles.listBoxText}>jacket</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.listBox, { width: 100, }]}><Text style={styles.listBoxText}>heels</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.listBox, { width: 82 }]}><Text style={styles.listBoxText}>cap</Text></TouchableOpacity>
            </View>
            {/* <View style={styles.TabBox}> */}
                {/* <TouchableOpacity>
                    <Image source={require('../assets/images/home.png')} style={[styles.IconImg, styles.HomeMgn]} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/images/cate.png')} style={[styles.IconImg, styles.CateMgn]} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/images/offers.png')} style={[styles.IconImg, styles.OfferMgn]} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/images/cart.png')} style={[styles.IconImg, styles.CartMgn]} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/images/account.png')} style={[styles.IconImg, styles.AccountMgn]} />
                </TouchableOpacity>
            </View> */}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    menuIcon: {
        color: colors.primary,
        // marginRight: 14,
        // marginLeft: 15,
        // marginBottom: 12,
        marginVertical: 6,
        fontSize:25,
        color:colors.black
      
    },
    SearchBox: {
        flexDirection: 'row',
        backgroundColor: colors.secondary,
        height: 40,
        width: 200,
        marginLeft: 15,
        // marginRight: 14,
        borderRadius: 5,
    },

    searchIcon: {
        height: 18,
        width: 18,
        marginRight: 9,
        marginLeft: 20,
        marginTop: 11,
        marginBottom: 11,
        fontSize: 14,
        color:colors.black
    },
    notificationIconBox: {
        height: 40,
        width: 40,
        marginLeft: 15,
        marginLeft: 16,
        borderRadius: 5,
        backgroundColor: '#F3F3F3'
    },
    notificationIcon: {
        height: 18,
        width: 18,
        marginBottom: 11,
        marginLeft: 11,
        marginRight: 11,
        marginTop: 11,
        color:colors.black
    },

    list: {
        width: 335,
        height: 40,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    searchFor: {
        marginBottom: 10,
        marginTop: 22,
        marginLeft: 35,
        fontSize: 16,
        color: 'black',
        fontFamily: 'Montserrat-SemiBold',
    },
    listBox: {
        height: 40,
        width: 114,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,

    },
    listBoxText: {
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginVertical: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'black',
    },
    TabBox: {
        flexDirection: 'row',
        width: 372,
        height: 83,
        marginTop: 400,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width:0, height:1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5

    },

    IconImg: {
        marginTop: 21
    },
    HomeMgn: {
        marginRight: 22,
        marginLeft: 21,
        height: 39,
        width: 38
    },
    CateMgn: {
        marginRight: 25,
        width: 65,
        height: 39
    },
    OfferMgn: {
        marginRight: 37,
        marginTop: 13,
        width: 39,
        height: 49,
    },
    CartMgn: {
        marginRight: 34,
        width: 26,
        height: 40,
        marginTop: 22,

    },
    AccountMgn: {
        marginRight: 15,
        width: 51,
        height: 39,
        marginTop: 24,
    },
})