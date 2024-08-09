import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Trending from './assets/screens/Trending'
import Shop from './assets/screens/Shop'
import Home from './assets/screens/Home'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6'
import Profile from './assets/screens/Profile'
import PlaceOrder from './assets/screens/PlaceOrder'


const Tab=createBottomTabNavigator()


const BottomNavigation = () => {
  return (
     <Tab.Navigator  screenOptions = {{
      headerShown:false,
       tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'black',
      tabBarActiveBackgroundColor:'red',
      tabBarLabelStyle: { fontSize: 16 },
      tabBarStyle: { height: 70, paddingBottom: 10 },
     }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon:()=>(
        <AntDesign name="home" size={25} color="black"/>
   ) }} />
      <Tab.Screen name="Trending" component={Trending} options={{
        tabBarIcon:()=>(
        <AntDesign name="hearto" size={25} color="black"/>
   ) }} />
      <Tab.Screen name="PlaceOrder"component={PlaceOrder}  options={{
        tabBarIcon:()=>(
        <AntDesign name="shoppingcart" size={25} color="black"/>
   ) }} />
      <Tab.Screen name="Profile" component={Profile}  options={{
        tabBarIcon:()=>(
          <FontAwesome6 name="user" size={25} color="black" style={styles.icon} />
   ) }} />
    </Tab.Navigator>

);
}




export default BottomNavigation

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
      },
      cartIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30, // Adjust as needed to position the icon correctly
      },
})