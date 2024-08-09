import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomImage = () => {
  return (
    <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require('../images/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../images/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../images/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
  )
}

export default CustomImage

const styles = StyleSheet.create({
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 20,
      },
      socialIcon: {
        width: 60,
        height: 60,
      },
})