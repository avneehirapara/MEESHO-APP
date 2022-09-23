import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductSreen from '../Sreens/ProductSreen';
import Settings from '../Sreens/Settings';
import {BottomNavigation} from './BottemNavi'
import Counter from '../Sreens/Counter';
import Post from '../Sreens/Post';
import SyncronizeAsyncronize from '../Sreens/SyncronizeAsyncronize';
import MyAccount from '../Sreens/MyAccount';
import MyOrder from '../Sreens/MyOrder';
import CartScreen from '../Sreens/CartScreen';
import CommentScreen from '../Sreens/CommentScreen';
import LogInPage from '../Sreens/LogIn';

const Drawer = createDrawerNavigator();

export const DrawerNavgation = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen options={{
            headerShown: false,
        }} name="Home" component={BottomNavigation} />
            <Drawer.Screen name="MyAccount" component={MyAccount} />
            <Drawer.Screen name="MyOrder" component={MyOrder} />
            <Drawer.Screen name="CartScreen" component={CartScreen} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Counter" component={Counter} />
            <Drawer.Screen name="Post" component={Post} />
            <Drawer.Screen name="SyncronizeAsyncronize" component={SyncronizeAsyncronize} />
            <Drawer.Screen name="CommentScreen" component={CommentScreen} />
            <Drawer.Screen name="Login" component={LogInPage} />
        </Drawer.Navigator>
    )
}
