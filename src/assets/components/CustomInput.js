import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const CustomInput = (prop) => {
 
  return (
   
     <TextInput
      style={styles.input}
      placeholder={prop.placeholder}
      value={prop.value}
      onChangeText={prop.onChangeText}
      />
  )
}

export default CustomInput

const styles = StyleSheet.create({
   input:{ marginRight:10, marginLeft:10, fontSize:20, width:"90%" },

})