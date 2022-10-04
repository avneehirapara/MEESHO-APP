import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../assets/colors/colors';


export default function ForgetPass({navigation}) {
    const [email, setEmail] = useState('')
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.EmailBox}>
                    <Feather name='voicemail' style={styles.InputIcon} />
                    <TextInput style={styles.TextInput}
                        placeholder='Enter Your Email Id'
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            // handleSignIn();
                            navigation.navigate('OtpPage');
                        }} >
                        <View style={styles.SubmitButton}>

                            <Text style={styles.SubmitText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, alignSelf: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('LogInPage')}>
                    <Text style={[{ color:'black', fontFamily: 'Montserrat-SemiBold',}]}>Back to Lig In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    },
    EmailBox: {
        flexDirection: 'row',
        height: 50,
        width: 350,
        borderRadius: 10,
        marginTop: 57,
        alignSelf: 'center',
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
    SubmitButton: {
        height: 50,
        width: 250,
        backgroundColor: colors.pink,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 61,

    },
    SubmitText: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 20,
        color: 'white',
        fontFamily: 'Montserrat-SemiBold'
    },

})