import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';


const GetStarted = () => {
  const navigation=useNavigation()
 return (
  <ImageBackground 
  source={require('../images/unsplah.png')} 
  style={styles.backgroundImage}
>
  <View style={styles.overlay}>
    <Text style={styles.title}>You want Authentic, here you go!</Text>
    <Text style={styles.subtitle}>Find it here, buy it now!</Text>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('BottomNavigation')}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  </View>
  </ImageBackground>
 
);
  
}

export default GetStarted

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  overlay: {
    marginTop:500,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 30,
    borderRadius: 10,
    alignItems:'center',
  },
  title: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight:'regular',
    textAlign: 'center',
    marginBottom: 25,
  },
  button: {
   height:55,
   paddingHorizontal:100,
   paddingVertical:15,
    backgroundColor: '#ff5a5f',
    borderRadius:10
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})