import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductSreen from '../Sreens/ProductSreen';
import Settings from '../Sreens/Settings';
import {BottomNavigation} from './BottemNavi'
import Counter from '../Sreens/Counter';

const Drawer = createDrawerNavigator();

export const DrawerNavgation = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen options={{
            headerShown: false,
        }} name="Home" component={BottomNavigation} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Counter" component={Counter} />
        </Drawer.Navigator>
    )
}
