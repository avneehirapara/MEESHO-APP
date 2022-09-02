import { View, Text } from 'react-native'
import React from 'react'
import HomeSreen from './Sreens/HomeSreen'
import ProductSreen from './Sreens/ProductSreen'
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './NavigationRoute/BottemNavi';
import { DrawerNavgation } from './NavigationRoute/DrowarNavigation';
import ProductDetails from './Sreens/ProductDetails';
import { configstoreg } from './Sreens/redux/store';
import { Provider } from 'react-redux';


export default function App() {
  const store = configstoreg()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavgation />
      </NavigationContainer>
     </Provider>

    //   <>
    //   {/* <HomeSreen /> */}
    //   {/* <ProductSreen /> */}
    //   {/* <ProductDetails /> */}
    // </>
  )
}
