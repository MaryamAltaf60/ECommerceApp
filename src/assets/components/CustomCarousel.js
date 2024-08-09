import React,{useState} from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel'

const CustomCarousel = () => {
 const width = Dimensions.get('window').width
  const data = [
    {
      id:1,
      image:require('../images/Group33726.png')
    },
    {
      id:2,
      image:require('../images/banner.png')
    },
    {
      id:3,
      image:require('../images/Group33726.png')
    },
  ];
  
  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image } style={styles.image} />
       </View>
  );
  return (
    <View>

    <Carousel
      width={width}
      height={width/2}
      autoPlay={true}
      data={data}
      scrollAnimationDuration={1000}
      renderItem={renderItem}
      
   />
    
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 10,
  },
 
});

export default CustomCarousel