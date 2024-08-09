import { StyleSheet,ActivityIndicator, Text, View,FlatList,Image,ScrollView,TouchableOpacity, Button, Vibration } from 'react-native'
import React,{useState,useEffect} from 'react'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from  'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation, useRoute } from '@react-navigation/native'
import Entypo from  'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import { SafeAreaView } from 'react-native-safe-area-context'

const Shop = () => {
  const [isLoading, setLoading] = useState(true);
  const navigation=useNavigation()
 const route=useRoute()
 console.log(route.params);
 const{id}=route.params || {};
 console.log(id);

    const [product, setProduct] = useState({})
    const [similarProducts, setSimilarProducts] = useState([])

    const getProduct = async () =>{
        const response=await fetch(`https://fakestoreapi.com/products/${id}`)
        const json=await response.json()
        console.log(json)
        setProduct(json)
        setLoading(false)
    }

    const getSimilarProduct = async () =>{
        const response=await fetch('https://fakestoreapi.com/products?limit=6')
        const json=await response.json()
        console.log(json)
        setSimilarProducts(json)
        setLoading(false)
    }
    
    useEffect(()=>{
    getProduct()
    getSimilarProduct()
    },[])

    const renderItem = ({ item }) => (
        <View style={styles.card}>
         <Image source={{ uri: item?.image }} style={styles.image} />
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
          <Text style={styles.title}>{item.title.slice(0,20)}</Text>
          <Text style={styles.description}>{item.description.slice(0,50)}</Text>
          <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
          <Text style={styles.price}>
            <Entypo name='star' size={24} color='#EDB310'/>
            <Entypo name='star' size={24} color='#EDB310'/>
            <Entypo name='star' size={24} color='#EDB310'/>
             {item.rating.rate}</Text>
        </View>

        
      );
  return (
    <ScrollView>

    <View style={styles.container}>
      <View style={{margin:10}}>
    
   {product && product.image &&( <Image source={{ uri: product?.image }} style={styles.productImage} />)}
    <Text style={styles.productTitle}>{product?.title}</Text>
    <Text style={styles.rating}>
            <Entypo name='star' size={24} color='#EDB310'/>
            <Entypo name='star' size={24} color='#EDB310'/>
            <Entypo name='star' size={24} color='#EDB310'/>
             {product?.rating?.rate}</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={styles.productPrice}>₹{product?.price}</Text>
    <Text style={styles.productDiscount}>50% OFF</Text>
     </View>
    <Text style={styles.descriptionText}>Description</Text>
    <Text style={styles.productDescription}>{product?.description}</Text>
    </View>
      
    <View style={styles.buttonLocation}>
        <TouchableOpacity style={styles.buttonIcon}>
          <EvilIcon name="location" size={26} color="black" />
          <Text style={styles.buttonTextIcon}>Nearest Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonVip}>
          <EvilIcon name="lock" size={26} color="black" />
          <Text style={styles.buttonTextIcon}>VIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <EvilIcon name="retweet" size={26} color="black" />
          <Text style={styles.buttonTextIcon}>Return policy</Text>
        </TouchableOpacity>
      </View>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={styles.buttonContainer}  onPress={()=>navigation.navigate('Cart')}>
      <View  style={styles.circle}>       
         <Ionicons name="cart-outline" size={30} color='#ffff' style={{margin:10,alignItems:'centre'}} />
        </View>
        <Text style={styles.text}>Go to cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBox} onPress={()=>navigation.navigate('Profile')}>
      <View style={styles.icon}>       
         <FontAwesome name="hand-pointer-o" size={30} color='#ffff' style={{margin:10,alignItems:'centre'}} />
        </View>
        <Text style={styles.text}>Buy Now</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <Text style={styles.textNormal}>Delivery in</Text>
        <Text style={styles.textBold}>1 within Hour</Text>
      </View>
      <View style={{flexDirection:'row',margin:10}}>
      <TouchableOpacity style={styles.button}>
        <Feather name="eye" size={24} color="#000" />
        <Text style={styles.buttonText}>View Similar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="compare" size={24} color="#000" />
        <Text style={styles.buttonText}>Add to Compare</Text>
      </TouchableOpacity>
      </View>
      <Text style={{fontSize:22,fontWeight:'bold',color:'#000000',marginLeft:15}}>Similar To  </Text>
     <View style={styles.header}>
         <Text style={{fontSize:22,fontWeight:'bold',color:'#000000'}}>282+ Iteams  </Text>
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
      <View style={{flex:1}}>
      {isLoading ? (
        <ActivityIndicator  size="large" color="#00ff00"/>
      ) : (
      <FlatList
        data={similarProducts}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
      )}
      </View>
      </View>
      </ScrollView>
     
    
  )
}

export default Shop

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F5F5F5',
      },
      productImage: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        margin:10
      },
       productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'black'
      },
      descriptionText:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
      },
      productPrice: {
        fontSize: 20,
        color: 'black',
      },
      productDiscount: {
        fontSize: 16,
        color: 'black',
        marginHorizontal:10
      },
      productDescription: {
        marginVertical: 5,
        fontSize:20
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3F92FF',
        height:50,
        width:"40%",
        borderRadius: 10,
        color:'blue',
        margin:10,
        elevation:1
      },
      circle: {
        width: 60,
        height: 60,
        borderRadius: 18,
        backgroundColor: '#2463C2',
        borderColor:'#fff',
        elevation:2,
        padding:2
      },
      buttonBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#52D889',
        height:50,
        width:"40%",
        borderRadius: 10,
        color:'blue',
        margin:10,
        elevation:1
      },
       icon: {
        width: 60,
        height: 60,
        borderRadius: 18,
        backgroundColor: '#52D889',
        borderColor:'#fff',
        elevation:2,
        padding:2
      },
      text: {
        color: '#fff',
        fontSize: 20,
      },
      similarText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        
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
      list: {
        padding: 10,
      },
      card: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        elevation:2
      },
      image: {
        height: 150,
        resizeMode: 'cover',
        elevation:2
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
      rating: {
        marginTop:5,
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
      buttonLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:10
      },
      buttonIcon: {
        height:40,
        width:'35%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#BBBBBB',
        borderRadius: 5,
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical:10,
      },
      buttonVip: {
        height:40,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#BBBBBB',
        borderRadius: 5,
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical:10,
      },
      buttonTextIcon: {
        fontSize: 14,
        color:'#828282'
      },
      banner: {
        flexDirection: 'coulmn',
        backgroundColor: '#FFCCD5',
        padding: 10,
        borderRadius: 10,
        margin:10
      },
      textNormal: {
        fontSize: 22,
        color: '#000',
        fontWeight:'semibold',
        color:'black'
        
      },
      textBold: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
      },
})