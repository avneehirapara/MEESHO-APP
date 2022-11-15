import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from '../Sreens/HomeSreen';
import ProductSreen from '../Sreens/ProductSreen';
import Settings from '../Sreens/Settings';
import { colors } from '../assets/colors/colors';
import MyAccount from '../Sreens/MyAccount';
import MyOrder from '../Sreens/MyOrder';
import ProductDetails from '../Sreens/ProductDetails';
import LogInPage from '../Sreens/LogIn';
import ResetPass from '../Sreens/ResetPass';
import SingUpScreen from '../Sreens/SingUpScreen';
import LogOutScreen from '../Sreens/LogOutScreen';
import OtpPage from '../Sreens/OtpPage';
import ForgetPass from '../Sreens/ForgetPass';
import ConformPass from '../Sreens/ConformPass';


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
                }} />
            <Stack.Screen name="ProductDetails" component={ProductDetails}
                options={{
                    headerShown: false,
                }} />
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
                    // headerShown: false,
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
            {/* <Stack.Screen name='LogOutScreen' component={LogOutScreen}
                options={{
                    headerShown: false,
                }} /> */}
        </Stack.Navigator>
    )
}

const LogInstack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LogInPage' component={LogInPage}
                options={{
                    headerShown: false,
                }} />
                 {/* <Stack.Screen name="Home" component={HomeSreen}
                options={{
                    headerShown: false,
                }} /> */}
              <Stack.Screen name='SingUpScreen' component={SingUpScreen}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name='OtpPage' component={OtpPage}
                options={{
                    headerShown: false,
                }} />
                   <Stack.Screen name='ForgetPass' component={ForgetPass}
                options={{
                    headerShown: false,
                }} />
                    <Stack.Screen name='ConformPass' component={ConformPass}
                options={{
                    headerShown: false,
                }} />
          
        </Stack.Navigator>
    )
}

export { ProductStack, MyAccountStack, MyOrderStack, SettingsStack ,LogInstack}