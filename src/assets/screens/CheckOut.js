import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from  'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native'

const CheckOut = () => {
    const navigation=useNavigation()
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
         <Text style={styles.headerTitle}>Checkout</Text>
      </View>
      <View style={{borderWidth:0.3,backgroundColor:'#fff',borderColor:'#C6C6C6'}}/>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <EvilIcons name="location" size={25} color="black" />
          <Text style={styles.sectionTitle}>Delivery Address</Text>
        </View>
        <View style={styles.addressContainer}>
             <View style={styles.addressBox}>
            <View style={{flexDirection:'row'}} >
         <Text style={styles.addressText}>Address :</Text>
            <TouchableOpacity style={styles.editButton}>
            <MaterialIcons name="edit" size={24} color="black" />
          </TouchableOpacity>
          </View>
            <Text style={styles.addressDetail}>216 St Paul's Rd, London N1 2LL, UK</Text>
            <Text style={styles.contactDetail}>Contact : +44-784232</Text>
         </View>
          <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('PlaceOrder')}>
            <AntDesign name="pluscircleo" size={30} color="black"  style={{margin:10}}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shopping List</Text>
        <View style={styles.productCard}>
          <Image
            source={require('../images/image2.png')} 
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Women's Casual Wear</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.productVariations}>Variations:</Text >
            <View style={{marginLeft:10,flexDirection:'row'}}>
            <TouchableOpacity style={{borderColor:"#CACACA",borderWidth:1,borderRadius: 5, paddingVertical: 2, paddingHorizontal: 15}}>
            <Text style={{color:'black'}}>Black</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderColor:"#CACACA",borderWidth:1,borderRadius: 5, paddingVertical: 5, paddingHorizontal: 15}}>
            <Text style={{color:'black'}}>Red</Text>
            </TouchableOpacity>
            </View>
            </View>
           <View style={styles.productRating}>
            <Text style={styles.ratingText}>4.8</Text>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star-half-full" size={16} color="grey" />
           </View>
           <View style={{flexDirection:'row',marginTop:5,marginLeft:5}}>
           <View style={{borderColor:"#CACACA",borderWidth:1,borderRadius: 10, paddingVertical: 1, paddingHorizontal: 18,}}>
            <Text style={styles.productPrice}>$ 34.00</Text>
            </View>
            <View style={{flexDirection:'column',marginLeft:10}}>
            <Text style={styles.discount}>upto 33% off</Text>
            <Text style={styles.oldPrice}>$ 64.00</Text>
            </View>
            </View>
           </View>
          </View>
           <View style={styles.totalOrder}>
          <Text style={{fontSize:16,fontWeight:'bold'}}>Total Order (1) :</Text>
          <Text style={styles.totalPrice}>$ 34.00</Text>
         </View>
         </View>

      <View style={styles.section}>
        <View style={styles.productCard}>
          <Image
            source={require('../images/image1.png')} // Replace with your image URL or local image
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Men's Jacket</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.productVariations}>Variations : </Text>
            <View style={{marginLeft:10,flexDirection:'row'}}>
            <TouchableOpacity style={{borderColor:"#CACACA",borderWidth:1,borderRadius: 5, paddingVertical: 2, paddingHorizontal: 15}}>
            <Text style={{color:'black'}}>Green</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderColor:"#CACACA",borderWidth:1,borderRadius: 5, paddingVertical: 5, paddingHorizontal: 15}}>
            <Text style={{color:'black'}}>Grey</Text>
            </TouchableOpacity>
            </View>
            </View>
        
            <View style={styles.productRating}>
            <Text style={styles.ratingText}>4.7</Text>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star-half-full" size={16} color="grey" />
              </View>
              <View style={{flexDirection:'row',marginTop:5,marginLeft:5}}>
           <View style={{borderColor:"#CACACA",borderWidth:1,borderRadius: 10, paddingVertical: 1, paddingHorizontal: 18,}}>
            <Text style={styles.productPrice}>$ 45.00</Text>
            </View>
            <View style={{flexDirection:'column',marginLeft:10}}>
            <Text style={styles.discount}>upto 28% off</Text>
            <Text style={styles.oldPrice}>$ 67.00</Text>
            </View>
            </View>
           
          </View>
        </View>
        <View style={styles.totalOrder}>
          <Text  style={{fontSize:16,fontWeight:'bold'}}>Total Order (1) :</Text>
          <Text style={styles.totalPrice}>$ 45.00</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default CheckOut

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 20,
        marginTop:10
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'black'
      },
      section: {
        marginBottom: 20,
        marginTop:10
      },
      sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color:'black',
        marginBottom:10
      },
      addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      addressBox: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
      },
      addressText: {
        fontWeight: 'bold',
        fontSize:20,
      },
      addressDetail: {
        marginVertical: 2,
        fontWeight:'bold'
      },
      contactDetail: {
        color: 'gray',
        fontWeight:'bold'
      },
      editButton: {
        backgroundColor: '#f9f9f9',
        marginLeft: 150,
      },
      addButton: {
        padding: 15,
        borderRadius: 5,
        flex:0.2,
        backgroundColor: '#fff',
       borderRadius: 5, 
       shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
       shadowOpacity: 0.3,
       shadowRadius: 10,
       elevation: 10, 
  
      },
      productCard: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        borderRadius: 5, 
        shadowColor: '#000',
         shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
      },
      productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
      },
      productInfo: {
        flex: 1,
         },
      productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'black'
      },
      productVariations: {
        color: 'black',
        marginVertical: 5,
        fontSize:15
      },
      productRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
      },
      ratingText: {
        color: 'black',
        fontSize:15,
        marginRight:5
      },
      productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color:'black'
      },
      oldPrice: {
        textDecorationLine: 'line-through',
        color: 'gray',
      },
      discount: {
        color: 'red',
        fontSize:15,
        marginTop:5
      },
      totalOrder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      totalPrice: {
        fontWeight: 'bold',
        fontSize:16,
        color:'black'
      },
})