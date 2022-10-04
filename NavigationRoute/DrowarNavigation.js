import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductSreen from '../Sreens/ProductSreen';
import Settings from '../Sreens/Settings';
import { BottomNavigation } from './BottemNavi'
import Counter from '../Sreens/Counter';
import Post from '../Sreens/Post';
import SyncronizeAsyncronize from '../Sreens/SyncronizeAsyncronize';
import MyAccount from '../Sreens/MyAccount';
import MyOrder from '../Sreens/MyOrder';
import CartScreen from '../Sreens/CartScreen';
import CommentScreen from '../Sreens/CommentScreen';
import LogInPage from '../Sreens/LogIn';
import { LogInstack } from './StackNavi';
import { useSelector } from 'react-redux';
import LogOutScreen from '../Sreens/LogOutScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

export const DrawerNavgation = () => {
    const [asyncDataVal, setAsyncDataVal] = useState(null)

    let authData = useSelector(state => state.auth)

    useEffect(() => {
        asyncData();
    }, [])

    let asynUser = null;

    const asyncData = async () => {
        asynUser = await AsyncStorage.getItem("user");

        setAsyncDataVal(asynUser)
    }

    console.log("in ddddddddddddddddddddddd",asyncDataVal !== 'Valid', authData.auth === null);

    return (

        authData.auth === null && asyncDataVal !== 'Valid' ?
            <Drawer.Navigator initialRouteName="LogIn">
                <Drawer.Screen
                    options={{ headerShown: false, }}
                    name="LogIn" component={LogInstack} />
            </Drawer.Navigator>
            :
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen options={{
                    headerShown: false,
                }}
                    name="Home" component={BottomNavigation} />
                <Drawer.Screen name="MyAccount" component={MyAccount} />
                <Drawer.Screen name="MyOrder" component={MyOrder} />
                <Drawer.Screen name="CartScreen" component={CartScreen} />
                <Drawer.Screen
                    options={{ headerShown: false, }}
                    name="Settings" component={Settings} />
                <Drawer.Screen name="Counter" component={Counter} />
                <Drawer.Screen name="Post" component={Post} />
                <Drawer.Screen name="SyncronizeAsyncronize" component={SyncronizeAsyncronize} />
                <Drawer.Screen name="CommentScreen" component={CommentScreen} />
                <Drawer.Screen name="LogOut" component={LogOutScreen}
                    options={{
                        headerShown: false,
                    }} />
            </Drawer.Navigator>


    )

}
