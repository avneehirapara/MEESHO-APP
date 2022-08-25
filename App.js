import { View, Text } from 'react-native'
import React from 'react'
import HomeSreen from './Sreens/HomeSreen'
import ProductSreen from './Sreens/ProductSreen'
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './NavigationRoute/BottemNavi';
import { DrawerNavgation } from './NavigationRoute/DrowarNavigation';
import ProductDetails from './Sreens/ProductDetails';


export default function App() {
  return (

    <NavigationContainer>
    <DrawerNavgation />
  </NavigationContainer>
  //   <>
  //   {/* <HomeSreen /> */}
  //   {/* <ProductSreen /> */}
  //   {/* <ProductDetails /> */}
  // </>
  )
}
