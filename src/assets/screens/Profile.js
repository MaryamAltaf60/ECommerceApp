import { Image, StyleSheet, Text, View,TouchableOpacity ,TextInput,Button, ScrollView} from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation=useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState("");
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  return (
    <ScrollView style={styles.container}>
    <Text style={styles.header}>Checkout</Text>
    <View style={styles.profileContainer}>
      <Image source={require('../images/profile.png')}  />
      <TouchableOpacity style={styles.editIcon}>
        <AntDesign name='edit' size={22} color='#ffff'/>
      </TouchableOpacity>
    </View>
    <Text style={styles.sectionHeader}>Personal Details</Text>
    <Text style={styles.text}>Email Address</Text>
    <View style={styles.inputContainer}>
    <CustomInput   onChangeText={(input)=>setEmail(input)} placeholder="Email Address" />
    </View>
    <Text style={styles.text}>Password</Text>
    <View style={styles.inputContainer}>
    <CustomInput  secureTextEntry onChangeText={(input)=>setPassword(input)} placeholder="Password" />
    </View>
    <TouchableOpacity>
      <Text style={styles.changePasswordText}>Change Password</Text>
    </TouchableOpacity>
    <View style={{borderWidth:0.3,backgroundColor:'#fff',borderColor:'#C6C6C6'}}/>
    <Text style={styles.section}>Business Address Details</Text>
    <Text style={styles.text}>Pincode</Text>
    <View style={styles.inputContainer}>
    <CustomInput  onChangeText={(input)=>setPincode(input)} placeholder="Pincode" />
    </View>
    <Text style={styles.text}>Address</Text>
    <View style={styles.inputContainer}>
    <CustomInput  onChangeText={(input)=>setAddress(input)} placeholder="Address" />
      </View>
      <Text style={styles.text}>City</Text>
    <View style={styles.inputContainer}>
    <CustomInput onChangeText={(input)=>setCity(input)} placeholder="City" />
    </View>
    <Text style={styles.text}>State</Text>
    <View style={styles.inputContainer}>
    <CustomInput onChangeText={(input)=>setState(input)} placeholder="State" />
    </View>
    <Text style={styles.text}>Country</Text>
    <View style={styles.inputContainer}>
    <CustomInput onChangeText={(input)=>setCountry(input)} placeholder="Country" />
      </View>
      <View style={{borderWidth:0.3,backgroundColor:'#ffff',borderColor:'#C6C6C6'}}/>
    <Text style={styles.section}>Bank Account Details</Text>
    <Text style={styles.text}>Bank Account Number</Text>
    <View style={styles.inputContainer}>
    <CustomInput onChangeText={(input)=>setAccountNumber(input)} placeholder="Bank Account Number" />
    </View>
    <Text style={styles.text}>Account Holder’s Name</Text>
    <View style={styles.inputContainer}>
    <CustomInput onChangeText={(input)=>setAccountHolderName(input)} placeholder="Account Holder's Name" />
    </View>
    <Text style={styles.text}>IFSC Code</Text>
    <View style={styles.inputContainer}>
    <CustomInput onChangeText={(input)=>setIfscCode(input)} placeholder="IFSC Code" />
    </View>
    <CustomButton text="Save" onPress={()=>navigation.navigate('CheckOut')}/>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color:'black'
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editIcon: {
   bottom:3,
   left:210,
   position:'absolute'
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    color:'black',

  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    color:'black',
    marginTop:20

  },
  text:{
   fontSize:17,
   fontWeight:'semibold',
   marginVertical:8,
   color:'#000000'

  },
  inputContainer: {
    borderWidth: 2,
    borderColor: '#C8C8C8',
    borderRadius: 8,
    padding: 8,
    marginVertical: 10,
    color:"#fff"
  },
  changePasswordText: {
    color: '#F83758',
    textAlign: 'right',
    marginVertical: 8,
    fontSize:16,
    marginBottom:15
  },
})