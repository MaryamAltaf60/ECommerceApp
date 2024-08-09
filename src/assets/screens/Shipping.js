import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../components/CustomInput'
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Shipping = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return(
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Checkout</Text>
    </View>
    <View style={{borderWidth:0.3,backgroundColor:'#fff',borderColor:'#C6C6C6'}}/>
    <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Order</Text>
          <Text style={styles.summaryValue}>₹ 7,000</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Shipping</Text>
          <Text style={styles.summaryValue}>₹ 30</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Total</Text>
          <Text style={styles.summaryValue}>₹ 7,030</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <Text style={styles.paymentTitle}>Payment</Text>
      <View style={styles.inputContainer}>
      <Image source={require('../images/visa.png')} style={styles.icon}/>
      <CustomInput
        placeholder="Enter Payment"
      />
      </View>
      <View style={styles.inputBox}>
      <Image source={require('../images/paypal.png')} style={styles.icon}/>
      <CustomInput
        placeholder="Enter Payment"
      />
      </View>
      <View style={styles.inputBox}>
      <Image source={require('../images/maestro.png')} style={styles.icon}/>
      <CustomInput
        placeholder="Enter Payment"
      />
      </View>
      <View style={styles.inputBox}>
      <Image source={require('../images/applelogo.png')} style={styles.icon}/>
      <CustomInput
        placeholder="Enter Payment"
      />
      </View>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.openButton}>
        <Text style={styles.openButtonText}>Continue</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
         <View style={styles.circle}>
         <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
          <FontAwesome name="check" size={40} color="white" style={{margin:30}}/>
               </TouchableOpacity>
               </View>
            <Text style={styles.modalText}>Payment done successfully.</Text>
           
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Shipping

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 16,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        justifyContent:'center'
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop:20,
        color:'black'
      },
      summary: {
        margin: 16,
        
      },
      summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      summaryText: {
        fontSize: 18,
        color: 'grey',
        fontWeight:'bold'
      },
      summaryValue: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      divider: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 16,
      },
      paymentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color:'black',
        margin:16
     },
     inputContainer: { width:'95%', height: 70, borderColor: '#F83758', borderWidth: 1, borderRadius: 10, padding:5, paddingHorizontal: 10, marginBottom: 15, backgroundColor:'#F3F3F3', flexDirection:'row',margin:10},
     icon:{marginTop:20},
     inputBox: { width:'95%', height: 70,backgroundColor:'#dbd6d6', borderRadius: 10, padding:5, paddingHorizontal: 10, marginBottom: 15, backgroundColor:'#F3F3F3', flexDirection:'row',margin:10,elevation:2},
     
  openButton: {
    backgroundColor: '#F83758',
    padding: 20,
    borderRadius: 10,
    margin:10
  },
  openButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:24
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 333,
    height:201,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize:20,
    fontWeight:'bold'
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF3366',
  },
     
    });
    

