import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Snackbar from 'react-native-snackbar';
import CustomButton from '../components/CustomButton'
import CustomImage from '../components/CustomImage'
import CustomInput from '../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import CustomPassword from '../components/CustomPassword'

const SignIn = () => {
  const navigation=useNavigation()
    const [username, setUsername] = useState('');
    const [password,setPassword] =useState('')
    
    const handleLogin = () =>{
      if (username =='' || password =='' ){
          Snackbar.show({
              text:'All Fields Must Be Filled',
              duration:Snackbar.LENGTH_LONG,
              textColor:'white',
              backgroundColor:'red',
          });  
      }
      else if(password.length<8){
        Snackbar.show({
            text:'Password Must Be Correct',
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
          navigation.navigate('SignUp')
      }
    }
   return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={styles.inputContainer}>
      <FontAwesome6 name="user" size={25} color="#626262" style={styles.icon} />
       <CustomInput
        placeholder="Username or Email"
        value={username}
        onChangeText={(input)=>setUsername(input)}
      />
      </View>
        <CustomPassword placeholder="Password" onChangeText={(input)=>setPassword(input)}/>
        <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
       <CustomButton text="Login"  onPress={handleLogin}/>
       <Text style={styles.orText}>- OR Continue with -</Text>
      <CustomImage/>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Create An Account </Text>
        <TouchableOpacity>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20, },
    title: {fontSize: 40,fontWeight: 'bold',color: '#000',marginBottom: 25},
    inputContainer: { width:'95%', height: 55, borderColor: '#A8A8A9', borderWidth: 1, borderRadius: 7, padding:5, paddingHorizontal: 10, marginBottom: 15, backgroundColor:'#F3F3F3', elevation:2, flexDirection:'row'},
    icon:{marginTop:5},
    forgotPassword: {marginLeft:20, color: '#F83758', marginBottom: 35, fontSize:15},
    loginButtonText: { color: '#fff', fontSize: 20, fontWeight: 'bold', },
    orText: { color: '#575757', marginTop:40, marginBottom:20 },
    signupContainer: { flexDirection: 'row', },
    signupText: { color: '#575757', },
    signupButtonText: { color: '#F83758', fontWeight: 'bold', },
})