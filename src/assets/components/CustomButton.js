import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({text,onPress}) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress} >
        <Text style={styles.loginButtonText}>{text}</Text>
      </TouchableOpacity>

  )
}

export default CustomButton

const styles = StyleSheet.create({
    loginButton: {
        width: '95%',
        height: 55,
        backgroundColor: '#F83758',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 40,
        marginTop:20,
        marginLeft:10
      },
      loginButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
})