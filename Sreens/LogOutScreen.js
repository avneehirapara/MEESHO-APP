import { View, Text, Pressable, StyleSheet, Modal } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { useDispatch } from 'react-redux';
import { signoutAction } from './redux/action/Auth.action';
import { useState } from 'react';

export default function LogOutScreen({navigation}) {

  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(true);


  const handelLogOut = () => {

    dispatch(signoutAction())

  }

  const handlreturnHome = () => {  
    setModalVisible(false)
    console.log("in lllllllllllllllllllllllll");
    navigation.navigate('Home')
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are You Sure to Logout?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => { setModalVisible(!modalVisible), handelLogOut() }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {handlreturnHome()}}
            >
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Log Out</Text>
          </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
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
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
