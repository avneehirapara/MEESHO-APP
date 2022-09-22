import {  View, Text, Modal, StyleSheet, Pressable ,TextInput } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../assets/colors/colors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentReducer } from './redux/reducer/CommentReducer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addcomment, deletecomment, Editcomment, getcomment } from './redux/action/Comment.action';
import { useState } from 'react';

export default function CommentScreen() {

    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [update, setUpdate] = useState(false);
    const [uid, setUId] = useState(0);

    const COMMMENT = useSelector(state => state.comment);
    // console.log("hhhhhhh", COMMMENT.comment);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getcomment())
    }, [])


    // COMMMENT.comment.map((c,i)=> {
    //     console.log(c.name);
    // }) 


  

    const handelAdddata = () => {
        // console.log("add data");
        dispatch(addcomment({ name, email }))
    }

    const handeldelete = ((id) => {
        // console.log("View file done " , id);
        dispatch(deletecomment())
    })

    const HandelEdit = ((data) => {
        setUId(data.id)
        setName(data.name)
        setemail(data.email)
        setModalVisible(true)
        setUpdate(true)
    })

    const handelUpdateData = () => {
        dispatch(Editcomment({ id: uid, name,email }))
    }


    return (
        <ScrollView>
        <View>
            {
                COMMMENT.comment.map((c, i) => (
                    <View key={i}>
                        <View style={{ flexDirection: 'row', left:350, top:25}} >
                            <TouchableOpacity onPress={() => HandelEdit(c)} >
                                <Entypo name='pencil' style={Styles.pen} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handeldelete(c.id)}>
                                <MaterialCommunityIcons name='delete' style={Styles.delet} />
                            </TouchableOpacity>
                        </View>
                        <Text>{c.name}</Text>
                        <Text>{c.email}</Text>
                    </View>

                ))
            }
            <View style={Styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={Styles.centeredView}>
                        <View style={Styles.modalView}>
                            <TextInput
                                style={Styles.modalText}
                                placeholder='NAME'
                                onChangeText={(text) => setName(text)}
                                value={name}
                            />
                            <TextInput
                                style={Styles.modalText}
                                placeholder='EMAIL ID'
                                onChangeText={(text) => setemail(text)}
                                value={email}
                            />
                            <View style={{ flexDirection: 'row' }}>

                                {
                                    update ?
                                        <Pressable
                                            style={[Styles.button, Styles.buttonClose, Styles.btn2]}
                                            onPress={() => { handelUpdateData(), setModalVisible(!modalVisible) }}>
                                            <Text style={Styles.textStyle}>UPDATE</Text>
                                        </Pressable>
                                        :
                                        <Pressable
                                            style={[Styles.button, Styles.buttonClose, Styles.btn2]}
                                            onPress={() => { handelAdddata(), setModalVisible(!modalVisible) }}>
                                            <Text style={Styles.textStyle}>add</Text>
                                        </Pressable>
                                }
                                <Pressable
                                    style={[Styles.button, Styles.buttonClose, Styles.btn2]}
                                    onPress={() => { setModalVisible(!modalVisible) }} >
                                    <Text style={Styles.textStyle}>CANCEL</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[Styles.button, Styles.buttonOpen]}
                    onPress={() => { setModalVisible(true); setUpdate(false) }}>
                    <Text style={Styles.textStyle}>ADD PRODUCT</Text>
                </Pressable>
            </View>
        </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    card: {
        height: 100,
        width: 200,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#F3F3F3',
        marginBottom: 15,
        marginRight: 15,
        marginLeft: 15,
        marginTop: 10,
        alignSelf: 'center'

    },
    cardText: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Montserrat-Medium',
        marginHorizontal: 5,
        top: 25
    },
    pen: {
        color: 'black',
        fontSize: 18,
    },
    delet: {
        color: 'black',
        fontSize: 18,

    },
    btn: {
        bottom: 20
    },
    btn2: {
        width: 150,
        margin: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: 200
    },
    buttonOpen: {
        backgroundColor: "#2196F3",

    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        borderWidth: 1,
        width: 300
    }

});