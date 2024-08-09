import { Dimensions, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React,{useState,useRef} from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { useNavigation } from '@react-navigation/native'

const slides=[
    {
        key:1,
        title:'Choose Products',
        text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        image:require('../images/fashion.png')
    },
    {
        key:2,
        title:'Make Payment',
        text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        image:require('../images/sales.png')
    },
    {
        key:3,
        title:'Get Your Order',
        text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        image:require('../images/Shopping.png')
    }
]

const Splash = () => {
    const navigation=useNavigation()
    const [showRealApp,setShowRealApp] =useState(false)
    // const [page,setPage]=useState(1)
    
  


    const onDone =() => {
        setShowRealApp(true);
    }

  
    

    const renderItem =({item}) => {
        return(
            <View style={styles.slide}>
             <View style={styles.header}>
          <Text style={styles.stepText}></Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          </View>
                <Image source={item.image} style={styles.image}/>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };

    // const renderPagination = () => {
    //     setPage(page + 1);
    //   };

    const renderNextButton = () => {
        return(
            <View>
                <Text style={styles.buttonText}>Next</Text>
            </View>
        );
    };

    const renderPrevButton = () => {
        return(
            <View>
                <Text style={styles.buttonPrevText}>Prev</Text>
            </View>
        );
    };

   

    const renderDoneButton = () => {
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        );
    };

    return (
        <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        renderDoneButton={renderDoneButton}
        // renderPagination={renderPagination}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        showPrevButton
        stepText
      />
     
    );

}

export default Splash

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
      },
      header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 40,
        paddingHorizontal: 20,
      },
      stepText: {
        color: '#000000',
        fontSize: 18,
      },
      skipText: {
        color: '#000000',
        fontSize: 18,
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 20,
      },
      text: {
        fontSize: 14,
        fontWeight:'semibold',
        color: '#A8A8A9',
        textAlign: 'center',
      },
      image: {
        width: "110%",
        height: 300,
        marginVertical: 30,
        resizeMode:'contain'
      },
      buttonText: {
        color: '#F83758',
        fontSize: 18,
      },
      buttonPrevText: {
        color: '#C4C4C4',
        fontSize: 18,
      },
      dotStyle: {
        backgroundColor: '#A8A8A9',
      },
      activeDotStyle: {
        backgroundColor: 'black',
        width: 40,
        height:8
      },
    
})