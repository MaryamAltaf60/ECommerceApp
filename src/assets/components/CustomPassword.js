import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const CustomPassword = (prop) => {
   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
 return (
        <View style={styles.inputContainer}>
             <SimpleLineIcons name='lock' size={25} color='626262' style={styles.icon}/>
            <TextInput
                style={styles.input}
                onChangeText={prop.onChangeText}
                placeholder={prop.placeholder}
                secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
                <Feather
                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                    size={24}
                    color="gray"
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
  )
}

export default CustomPassword

const styles = StyleSheet.create({
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
        fontSize:18,
        width:'75%',
      },
      icon:{
        marginTop:8
      }
})