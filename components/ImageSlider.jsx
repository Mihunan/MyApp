import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sliderImages } from '../constants/index.js';
//import { useRoute } from '@react-navigation/native';

export default function ImageSlider() {
  return (
    <View>
      <Carousel
        data={sliderImages}
        loop={true}
        autoplay={true}
        hasParallaxImages={true}
        sliderWidth={wp(100)}
        firstItem={1}
        autoplayInterval={4000}
        itemWidth={wp(100) - 70}
        renderItem={ItemCard}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  )
}


const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View>
      <ParallaxImage
        source={item}
        containerStyle={{ flex: 1, borderRadius: 8 }}
        style={{ flex: 1, borderRadius: 30 }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  )
}
