import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../assets/colors/colors';
import { iconss } from '../assets/icons';


export default function CartScreen() {
    return (
        <ScrollView>
            <View style={Styles.container}>
                {/* _________________________________ Delet-Icon_______________________________________ */}

                <TouchableOpacity style={{ justifyContent: 'flex-end', alignItems: 'flex-end', top: 10, right: 10 }}>
                    <View style={Styles.DeletIconBox}>
                        <AntDesign name='delete' style={Styles.DeletIcon} />
                    </View>
                </TouchableOpacity>
                {/* _________________________________ Cart-Icon_______________________________________ */}
                <TouchableOpacity>
                    <Image source={iconss.Cart} style={Styles.CartBag} />
                    <Text style={Styles.middelText}>Nothing is added to cart.</Text>
                </TouchableOpacity>
                {/* _________________________________ Cart-Button______________________________________ */}

                <TouchableOpacity>
                    <View style={Styles.CartnButton}>

                        <Text style={Styles.CartText}>Continue Shopping</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const Styles = StyleSheet.create({
    DeletIconBox: {
        backgroundColor: colors.secondary,
        width: 30,
        borderRadius: 5,
    },
    DeletIcon: {
        fontSize: 20,
        padding: 5,
        alignSelf: 'center',
        color: colors.black
    },
    CartBag: {
        alignSelf: 'center',
        marginVertical: 150
    },
    middelText: {
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        bottom: 120,
        color: colors.softpink
    },
    CartnButton: {
        height: 50,
        width: 325,
        backgroundColor: colors.pink,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 61,

    },
    CartText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        alignSelf: 'center',
        marginTop: 15,
    },
})