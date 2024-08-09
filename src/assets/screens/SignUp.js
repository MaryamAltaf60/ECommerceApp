import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import Snackbar from 'react-native-snackbar';
import CustomImage from '../components/CustomImage'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import CustomPassword from '../components/CustomPassword'
import auth from '@react-native-firebase/auth';


const SignUp = () => {

  const navigation=useNavigation()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Sign = ()=>{
      auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
      navigation.replace('SignIn')
    }
    

    const handleLogin = () =>{
      if (username =='' || password ==''){
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
          navigation.navigate('ForgotPassword')
      }

  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <View style={styles.inputContainer}>
      <FontAwesome6 name="user" size={25} color="#626262" style={styles.icon} />
      <CustomInput
        placeholder="Username or Email"
        value={username}
        onChangeText={setUsername}
      />
      </View>
       <CustomPassword
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
       />
        <CustomPassword
        placeholder="Confirm Password"
        value={password}
        onChangeText={setPassword}
      />
        <View style={styles.signupContainer}>
        <Text style={styles.signupText}>By clicking the</Text>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}> button, you agree to the public offer </Text>
      </View>
     <CustomButton  text="Create an Account" onPress={Sign}/>
     <Text style={styles.orText}>- OR Continue with -</Text>
     <CustomImage/>
     <View style={styles.signupContainer}>
        <Text style={styles.signupText}>I Already Have an Account </Text>
        <TouchableOpacity>
          <Text style={styles.signupButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 25,
      },
      inputContainer: { width:'95%', height: 55, borderColor: '#A8A8A9', borderWidth: 1, borderRadius: 7, padding:5, paddingHorizontal: 10, marginBottom: 15, backgroundColor:'#F3F3F3', elevation:2, flexDirection:'row'},
      icon:{marginTop:5},
     
      forgotPassword: {
        marginLeft:20,
        color: '#F83758',
        marginBottom: 35,
        fontSize:16,
        marginLeft:10
      },
      orText: {
        color: '#575757',
        marginTop:40,
        marginBottom:20,
      },
      signupContainer: {
        flexDirection: 'row',
      },
      signupText: {
        color: '#575757',
      },
      signupButtonText: {
        color: '#F83758',
        fontWeight: 'bold',
      },
})