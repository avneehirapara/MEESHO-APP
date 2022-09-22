import { View, Text, Modal, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, DeletePost, EditPost, getPost } from './redux/action/post.action'
import { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default function Post() {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [update, setUpdate] = useState(false);
    const [uid, setUId] = useState(0);


    const dispatch = useDispatch();

    const post = useSelector(state => state.post);

    // console.log("kkkkkkkkkkkkkkkk", post.post);

    useEffect(() => {
        dispatch(getPost())
    }, [])

    const handelAddPost = () => {
        // console.log("1111111111111111111");
        dispatch(addPost({ title: name, author: description }))
    }

    const HandelDelet = ((id) => {
        // console.log(id);
        dispatch(DeletePost(id))
    })

    const HandelEdit = ((data) => {
        setUId(data.id)
        setName(data.title)
        setDescription(data.author)
        setModalVisible(true)
        setUpdate(true)
    })

   const handelUpdateData = () => {
    dispatch(EditPost({ id: uid, title: name, author: description }))
   }


    return (

        <ScrollView>
            <View>
                {
                    post.post.map((p, i) => (
                        <View key={i} style={Styles.card}>

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => HandelEdit(p)}>
                                    <Entypo name='pencil' style={Styles.pen} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => HandelDelet(p.id)}>
                                    <MaterialCommunityIcons name='delete' style={Styles.delet} />
                                </TouchableOpacity>

                            </View>
                            <Text style={Styles.cardText}>{p.title}</Text>
                            <Text style={Styles.cardText}>{p.author}</Text>
                        </View>


                    )

                    )
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
                                    placeholder='TITLE'
                                    onChangeText={(text) => setName(text)}
                                value={name}
                                />
                                <TextInput
                                    style={Styles.modalText}
                                    placeholder='AUOTHER'
                                    onChangeText={(text) => setDescription(text)}
                                value={description}
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
                                                onPress={() => { handelAddPost(), setModalVisible(!modalVisible) }}>
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
                        onPress={() =>{setModalVisible(true); setUpdate(false)}}>
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