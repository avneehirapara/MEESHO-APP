import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSreen from '../Sreens/HomeSreen';
import ProductSreen from '../Sreens/ProductSreen';
import { MyAccountStack, MyOrderStack, ProductStack, SettingsStack } from './StackNavi';
import Settings from '../Sreens/Settings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../assets/colors/colors';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
            return <AntDesign name={'home'} size={size} color={color} />;

          } else if (route.name === 'MyAccount') {
            iconName = focused
            return <MaterialCommunityIcons name={'account'} size={size} color={color} />;
          } else if (route.name === 'MyOrder') {
            iconName = focused
            return <Feather name={'shopping-bag'} size={size} color={color} />;
          } else if (route.name === 'setting') {
            iconName = focused
            return <AntDesign name={'setting'} size={size} color={color} />;
          }

        },
        tabBarActiveTintColor: colors.pink,
        tabBarInactiveTintColor: 'black',

      })}
    >
      <Tab.Screen name="Home" component={ProductStack}
        options={{
          headerShown: false
        }} />
      <Tab.Screen name="MyAccount" component={MyAccountStack}
        options={{
          headerShown: false
        }} />
      <Tab.Screen name="MyOrder" component={MyOrderStack}
        options={{
          headerShown: false
        }} />
        <Tab.Screen name="setting" component={SettingsStack}
        options={{
          headerShown: false
        }} />

    </Tab.Navigator>

  )
}

