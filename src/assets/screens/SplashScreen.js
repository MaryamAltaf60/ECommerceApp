import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation=useNavigation()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Splash');
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Image source={require('../images/Group.png')}/>
        <Text style={styles.text}>Stylish</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fffff',
        flexDirection:'row'
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
        color:'#F83758'
    }
})

