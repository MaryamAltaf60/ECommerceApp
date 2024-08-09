import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
  const navigation=useNavigation()
    const [email,setEmail] =useState('')

    const handleLogin = () =>{
      if (email =='' ){
          Snackbar.show({
              text:'All Fields Must Be Filled',
              duration:Snackbar.LENGTH_LONG,
              textColor:'white',
              backgroundColor:'red',
          });  
      }
      else if(!email.endsWith('@gmail.com')){
        Snackbar.show({
            text:'Email Must Be Correct',
            duration:Snackbar.LENGTH_LONG,
            textColor:'white',
            backgroundColor:'red',
        });
    }
      else{
        Snackbar.show({
            text:'Login Succssfully',
            duration:Snackbar.LENGTH_LONG,
            textColor:'white',
            backgroundColor:'green',
        })
        navigation.navigate('GetStarted')
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot password?</Text>
      <View style={styles.inputContainer}>
      <MaterialCommunityIcons name="email" size={25} color="#626262" style={styles.icon} />
      <CustomInput
        placeholder="Enter your email address"
        onChangeText={(input)=>setEmail(input)}
      />
       </View>
       <Text style={styles.orText}>* We will send you a message to set or reset your new password</Text>
       <CustomButton text="Submit"  onPress={handleLogin}/>
       </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
      },
      title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 25,
      },
      inputContainer: {
        width:'95%',
        height: 55,
        borderColor: '#A8A8A9',
        borderWidth: 1,
        borderRadius: 7,
        padding:5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor:'#F3F3F3',
         elevation:2,
        flexDirection:'row'
      },
      input:{
        marginRight:10,
        marginLeft:10,
        fontSize:18
      },
      icon:{
        marginTop:5
         },
         loginButton: {
            width: '95%',
            height: 55,
            backgroundColor: '#F83758',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginBottom: 40,
            marginTop:20
          },
          loginButtonText: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          },
          orText: {
            color: '#575757',
            marginTop:20,
            marginBottom:20
          },
})