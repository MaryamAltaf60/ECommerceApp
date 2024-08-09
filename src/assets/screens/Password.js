import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Feather from 'react-native-vector-icons/Feather'

const Password = () => {
  
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
                <Feather
                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                    size={24}
                    color="gray"
                />
            </TouchableOpacity>
        </View>
  )
}

export default Password

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
    },
})