import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from './assets/screens/SplashScreen'
import SignIn from './assets/screens/SignIn'
import Splash from './assets/screens/Splash'
import SignUp from './assets/screens/SignUp'
import ForgotPassword from './assets/screens/ForgotPassword'
import GetStarted from './assets/screens/GetStarted'
import Home from './assets/screens/Home'
import Trending from './assets/screens/Trending'
import Shop from './assets/screens/Shop'
import Profile from './assets/screens/Profile'
import CheckOut from './assets/screens/CheckOut'
import PlaceOrder from './assets/screens/PlaceOrder'
import Shipping from './assets/screens/Shipping'
import BottomNavigation from './BottomNavigation'
import Category from './assets/screens/Category'
import Cart from './assets/screens/Cart'


const Stack=createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator  initialRouteName={SplashScreen} screenOptions={{headerShown:false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
            <Stack.Screen name='Splash' component={Splash}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}/> 
            <Stack.Screen name="GetStarted" component={GetStarted}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Trending" component={Trending}/>
            <Stack.Screen name='Shop' component={Shop}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='CheckOut' component={CheckOut}/>
            <Stack.Screen name="PlaceOrder" component={PlaceOrder}/>
            <Stack.Screen name='Shipping' component={Shipping}/> 
              <Stack.Screen name="Category" component={Category}/>
              <Stack.Screen name="Cart" component={Cart}/>
            <Stack.Screen name="BottomNavigation" component={BottomNavigation}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default AppNavigator

const styles = StyleSheet.create({})