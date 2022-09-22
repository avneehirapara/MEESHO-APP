import { View, Text } from 'react-native'
import React from 'react'
import HomeSreen from './Sreens/HomeSreen'
import ProductSreen from './Sreens/ProductSreen'
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './NavigationRoute/BottemNavi';
import { DrawerNavgation } from './NavigationRoute/DrowarNavigation';
import ProductDetails from './Sreens/ProductDetails';
import { store } from './Sreens/redux/store';
import { Provider } from 'react-redux';
import Login from './Sreens/LogIn';
import SignUp from './Sreens/LogIn';
import { PersistGate } from 'redux-persist/integration/react'
import SearchSreen from './Sreens/SearchSreen';
import MyAccount from './Sreens/MyAccount';
import { ScrollView } from 'react-native-gesture-handler';
import Settings from './Sreens/Settings';
import CartScreen from './Sreens/CartScreen';


export default function App() {
  // const { store, persistor } = configstoreg()
  return (
   
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <NavigationContainer>
          <DrawerNavgation />
        </NavigationContainer>
        {/* <HomeSreen /> */}
        {/* <ProductSreen /> */}
        {/* <ProductDetails /> */}
        {/* <SignUp /> */}
        {/* <SearchSreen /> */}
        {/* <MyAccount/> */}
        {/* <Settings/> */}
      {/* </PersistGate> */}
      {/* <CartScreen /> */}
    </Provider>
    


  )
}
