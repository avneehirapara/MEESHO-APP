import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from '../Sreens/HomeSreen';
import ProductSreen from '../Sreens/ProductSreen';
import Settings from '../Sreens/Settings';
import { colors } from '../assets/colors/colors';
import MyAccount from '../Sreens/MyAccount';
import MyOrder from '../Sreens/MyOrder';
import ProductDetails from '../Sreens/ProductDetails';


const Stack = createNativeStackNavigator();

const ProductStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeSreen}
                  options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="ProductSreen" component={ProductSreen}
                       options={{
                        headerShown: false,
                    }}/>
        </Stack.Navigator>
    )
}

const ProductDetialStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductSreen" component={ProductSreen}
                  options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="ProductSreen" component={ProductDetails}
                       options={{
                        headerShown: false,
                    }}/>
        </Stack.Navigator>
    )
}

const MyAccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='MyAccount' component={MyAccount}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )
}
const MyOrderStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='MyOrder' component={MyOrder}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )
}
const SettingsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Settings' component={Settings}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )
}

export { ProductStack,ProductDetialStack, MyAccountStack ,MyOrderStack,SettingsStack}