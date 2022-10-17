import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../assets/colors/colors';
import { iconss } from '../assets/icons';
import { useStripe } from "@stripe/stripe-react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text,Alert } from "react-native";


export default function CartScreen() {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);
    const [secKey, setSecKey] = useState('')

    const fetchPaymentSheetParams = async () => {
        const response = await fetch(`http://172.20.10.5:8080/pay`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const { clientSecret, message } = await response.json();

        console.log(clientSecret, message);

        return {
            clientSecret
        };
    };

    const initializePaymentSheet = async () => {
        const {
            clientSecret,
        } = await fetchPaymentSheetParams();

        setSecKey(clientSecret);

        const { error } = await initPaymentSheet({
            paymentIntentClientSecret: clientSecret,
            merchantDisplayName: 'Merchant Name',
            // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
            //methods that complete payment after a delay, like SEPA Debit and Sofort.
            allowsDelayedPaymentMethods: true,
        });
        if (!error) {
            setLoading(true);
        }
    };

    const openPaymentSheet = async () => {
        const { error } = await presentPaymentSheet({
            clientSecret: secKey
        });

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'Your order is confirmed!');
        }
    };

    useEffect(() => {
        initializePaymentSheet();
    }, []);

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

                <TouchableOpacity variant="primary"
                    disabled={!loading}
                    title="Checkout"
                    onPress={openPaymentSheet}>
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