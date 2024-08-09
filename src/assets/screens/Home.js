import { StyleSheet,ActivityIndicator, Text, View,TouchableOpacity,ScrollView, Image, TextInput,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomInput from '../components/CustomInput'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import CustomCarousel from '../components/CustomCarousel'

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const navigation=useNavigation()
  const [categories, setCategories] = useState([]);
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
      <TouchableOpacity onPress={()=>navigation.navigate('Trending')}>
      <Text style={styles.title}>{item.title.slice(0,20)}...</Text>
      <Text style={styles.description}>{item.description.slice(0,20)}...</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.rating}>
            <Entypo name='star' size={24} color='#EDB310'/>
            <Entypo name='star' size={24} color='#EDB310'/>
            <Entypo name='star' size={24} color='#EDB310'/>
             {item.rating.rate}</Text>
      </TouchableOpacity>
    </View>
  );
 

  const getCategory = async () =>{
    const response=await fetch('https://fakestoreapi.com/products/categories')
    const json=await response.json()
    console.log(json)
    setCategories(json)
}

useEffect(()=>{
getCategory()
},[])

 
  return (
    <ScrollView style={styles.container}>
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
         <Text style={{fontSize:20,fontWeight:'bold',color:'#000000'}}>All Featured</Text>
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
       {/* Categories */}
       {isLoading ? (
        <ActivityIndicator  size="large" color="#00ff00"/>
      ) : (
       <FlatList
       data={categories}
       horizontal
       renderItem={({ item }) => (
        <View style={styles.categoryItem}>
          <TouchableOpacity onPress={()=>navigation.navigate('Category',  { name: item })}>
          <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
      )}

    <CustomCarousel />
    
    <View style={styles.box}>
      <View style={{flexDirection:'coulmn'}}>
      <Text style={styles.titleBox}>Deal of the Day</Text>
      <View style={styles.timerContainer}>
        <EvilIcon name="clock" size={24} color="#ffff" style={{marginTop:10}} />
        <Text style={styles.timerText}>22h 55m 20s remaining</Text>
      </View>
      </View>
      <TouchableOpacity style={styles.buttonBox}  onPress={()=>navigation.navigate('Trending')}>
        <Text style={styles.buttonBoxText}>View all</Text>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
    {isLoading ? (
        <ActivityIndicator  size="large" color="#00ff00"/>
      ) : (
    <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
         contentContainerStyle={styles.list}
      />
      )}
          <View style={{marginHorizontal:18,marginTop:10}}>
            <Image source={require('../images/Group33767.png')} style={{width:"102%"}}/>
          </View>
          <View style={{marginHorizontal:18,marginTop:10}}>
            <Image source={require('../images/mac.png')} style={{width:"102%"}}/>
          </View>
          <View style={styles.boxBox}>
      <View style={{flexDirection:'coulmn'}}>
      <Text style={styles.titleBox}>Deal of the Day</Text>
      <View style={styles.timerContainer}>
        <EvilIcon name="clock" size={24} color="#ffff" style={{marginTop:10}} />
        <Text style={styles.timerText}>22h 55m 20s remaining</Text>
      </View>
      </View>
      <TouchableOpacity style={styles.buttonInput}>
        <Text style={styles.buttonBoxText}>View all</Text>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
    {isLoading ? (
        <ActivityIndicator  size="large" color="#00ff00"/>
      ) : (
    <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
         contentContainerStyle={styles.list}
      />
      )}
       <View style={{marginHorizontal:18,marginTop:10}}>
            <Image source={require('../images/Group33769.png')} style={{width:'102%'}}/>
          </View>
          <View style={{marginHorizontal:18,marginTop:10}}>
            <Image source={require('../images/Frame33754.png')} style={{width:"120%"}}/>
          </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5f5f5',
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
      categoryItem: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 8,
        marginLeft:10,
        backgroundColor:'#FD6E87'
      },
      categoryText: {
        fontSize: 18,
        color: '#000',
      },
      box: {
        height:80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4392F9',
        padding: 10,
        borderRadius: 10,
        margin:18
      },
      boxBox: {
        height:80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FD6E87',
        padding: 10,
        borderRadius: 10,
        margin:18
      },
      titleBox: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      timerText: {
        color: 'white',
        marginLeft: 5,
        fontSize:16,
        marginTop:10
      },
      buttonBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor:'#4392F9',
        elevation:1
      },
      buttonInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor:'#FD6E87',
        elevation:1
      },
      buttonBoxText: {
        color: 'white',
        marginRight: 5,
        fontSize:20
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