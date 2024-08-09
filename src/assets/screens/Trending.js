import { StyleSheet,ActivityIndicator, Text, View,ScrollView,TouchableOpacity,Image, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomInput from '../components/CustomInput'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'


const Trending = () => {
  const [isLoading, setLoading] = useState(true);
  const navigation=useNavigation()
    const [data,setData] =useState([])

  const getProduct = async () =>{
    const response=await fetch('https://fakestoreapi.com/products')
    const json=await response.json()
    console.log(json)
    setData(json)
    setLoading(false)
}

useEffect(()=>{
getProduct()
},[])

const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <TouchableOpacity onPress={()=>navigation.navigate('Shop', { id: item.id })}>
      <Text style={styles.title}>{item.title.slice(0,15)}...</Text>
      <Text style={styles.description}>{item.description.slice(0,50)}...</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.rating}>
            <Entypo name='star' size={24} color='#EDB310'/>
            <Entypo name='star' size={24} color='#EDB310'/>
            <Entypo name='star' size={24} color='#EDB310'/>
             {item.rating.rate}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.iconButton}>
        <Entypo name="menu" size={30} color="#000" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={require('../images/group2.png')}
          style={styles.logo}
        />
      <Text style={styles.logoText}>Stylish</Text>
      </View>
      <TouchableOpacity style={styles.avatarButton}>
        <Image
          source={require('../images/group1.png')}
          style={styles.avatar}
        />
      </TouchableOpacity>
    </View>
     {/* Search Bar */}
     <View style={styles.searchContainer}>
     <Feather name="search" size={30} color="#BBBBBB" style={{margin:5}} />
       <CustomInput placeholder={'Search any Product...'}  onChangeText={()=>'setSearch'}/>
       <Feather name="mic" size={30} color="#BBBBBB" style={{margin:5, marginHorizontal:60}} />
         </View>
         <View style={styles.header}>
         <Text style={{fontSize:22,fontWeight:'bold',color:'#000000'}}>52,082+ Iteams </Text>
         <View style={styles.logoContainer}>
         <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sort</Text>
        <MaterialCommunityIcons name="sort-ascending" size={16} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Filter</Text>
        <Feather name="filter" size={16} color="#000" />
      </TouchableOpacity>
      </View>
      </View>
      {isLoading ? (
        <ActivityIndicator  size="large" color="#00ff00"/>
      ) : (
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    )}
      </View>
  )
}

export default Trending

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding:5
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
      },
      logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      logo: {
        width: 50,
        height: 40,
        marginRight: 5,
      },
      logoText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4392F9',
      },
      avatarButton: {
        padding: 10,
      },
      avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
      searchContainer: {
        margin:10,
        width:'95%',
        height: 55,
        borderColor: '#ffff',
        borderWidth: 1,
        borderRadius: 7,
        padding:5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor:'#ffff',
         elevation:2,
        flexDirection:'row'
      },
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        paddingVertical: 7,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        marginHorizontal: 5,
        elevation:2
      },
      buttonText: {
        marginRight: 5,
        fontSize: 18,
        color: '#000',
      },
      productItem:{
        height:55,
        width:'90%'
      },
      list: {
        padding: 10,
      },
      card: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        elevation:5
      },
      image: {
        height: 150,
        resizeMode: 'cover',
      },
      title: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color:'black'
      },
      price: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        color: 'black',
        fontSize:16,
        fontWeight:'bold'
      },
      description: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
      },
      rating: {
        marginTop:5,
        paddingBottom: 10,
        color: 'black',
        fontSize:16,
        fontWeight:'bold'
      },
})