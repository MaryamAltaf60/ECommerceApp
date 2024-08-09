import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const PlaceOrder = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
     <Text style={styles.headerTitle}>Shopping Bag</Text>
      <TouchableOpacity>
        <FontAwesome name="heart-o" size={24} color="black" />
      </TouchableOpacity>
    </View>

    <View style={styles.productSection}>
      <Image
        style={styles.productImage}
        source={require('../images/image3.png')}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>Women's Casual Wear</Text>
        <Text style={styles.productDescription}>Checked Single-Breasted Blazer</Text>
        <View style={styles.pickerContainer}>
            <Picker style={styles.picker}>
              <Picker.Item label="Size 42" value="42" />
            </Picker>
            <Picker style={styles.picker}>
              <Picker.Item label="Qty 1" value="1" />
            </Picker>
          </View>
        <Text style={styles.deliveryText}>Delivery by <Text style={styles.deliveryDate}>10 May 2XXX</Text></Text>
      </View>
    </View>

    <View style={styles.couponSection}>
      <View style={styles.couponRow}>
        <FontAwesome name="ticket" size={24} color="black" />
        <Text style={styles.couponText}>Apply Coupons</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.selectText}>Select</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.divider} />

    <View style={styles.orderDetails}>
      <Text style={styles.orderDetailsTitle}>Order Payment Details</Text>
      <View style={styles.orderRow}>
        <Text style={styles.orderLabel}>Order Amounts</Text>
        <Text style={styles.orderValue}>₹ 7,000.00</Text>
      </View>
      <View style={styles.orderRow}>
        <Text style={styles.orderLabel}>Convenience</Text>
        <TouchableOpacity>
          <Text style={styles.freeText}>Know More</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.freeText}>Apply Coupon</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orderRow}>
        <Text style={styles.orderLabel}>Delivery Fee</Text>
        <Text style={styles.freeText}>Free</Text>
      </View>
    </View>

    <View style={styles.divider} />

    <View style={styles.orderTotal}>
      <Text style={styles.orderTotalTitle}>Order Total</Text>
      <Text style={styles.orderTotalValue}>₹ 7,000.00</Text>
    </View>
    
    <TouchableOpacity>
    <View style={{flexDirection:'row'}}>
      <Text style={styles.emiText}>EMI Available</Text>
      <Text style={styles.detail}>Details</Text>
      </View>
    </TouchableOpacity>

    <View style={styles.footer}>
      <View style={{flexDirection:'column'}}>
      <Text style={styles.footerTotal}>₹ 7,000.00</Text>
      <Text style={styles.detail}>View Details</Text>
      </View>

      <TouchableOpacity style={styles.paymentButton} onPress={()=>navigation.navigate('Shipping')}>
        <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default PlaceOrder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
   
  },
  productSection: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  productImage: {
    width: "35%",
    height: 150,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black',
    fontSize:18
  },
  productDescription: {
    color: '#555',
    marginVertical: 4,
    fontWeight:'bold',
    fontSize:16
  },
  pickerContainer: {
    flexDirection: 'row',
  },
  picker: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 5,
  },
  deliveryText: {
    color: '#555',
    fontSize:16,
    fontWeight:'bold'
  },
  deliveryDate: {
    fontWeight: 'bold',
  },
  couponSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  couponRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  couponText: {
    marginLeft: 8,
    fontSize:18,
    fontWeight:'bold'
  },
  selectText: {
    color: '#F83758',
    fontSize:18,
    fontWeight:'bold'
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
  orderDetails: {
    paddingVertical: 16,
  },
  orderDetailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'black'
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  orderLabel: {
    color: '#555',
    fontSize:18,
  },
  orderValue: {
    fontWeight: 'bold',
    color:'black',
    fontSize:18
  },
  freeText: {
    color: '#F83758',
    fontSize:15,
    fontWeight:'bold'
  },
  orderTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  orderTotalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderTotalValue: {
    fontWeight: 'bold',
    color:'black',
    fontSize:18
  },
  emiText: {
    color: '#555',
    textAlign: 'left',
    marginBottom:20,
    fontSize:16,
    fontWeight:'bold'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  detail: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#F83758',
    marginLeft:10
  },
  paymentButton: {
    backgroundColor: '#F83758',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
