import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const SliderComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation=useNavigation();

  const data = [
    { key: '1', text: 'Klinic - ' ,subtext:'No\nappointments or video calls required',description:'Start a visit quickly and discreetly, whenever works best for you and get a treatment'},
    { key: '2', text: 'Kareer & Events' ,subtext:'',description:'While you train, we bring you the relevant jobs and events to cater employment.'},
    { key: '1', text: 'Klinic - ' ,subtext:'No\nappointments or video calls required',description:'Start a visit quickly and discreetly, whenever works best for you and get a treatment'},
  ];

  const renderItem = ({ item }: { item:any }) => (
    <View style={styles.slide}>
        <Image
        source={require('../assets/logo.png')}
        style={{height:50,width:200,marginBottom:150}}
        />
        
      <Text style={styles.title}>
        <Text style={styles.boldText}>{item.text} </Text>{item.subtext}
      </Text>
      <Text style={styles.subtitle}>
       {item.description}
      </Text>
      {/* <Text style={styles.slideText}>{item.text}</Text> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
       
      </View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => {setActiveIndex(index)
            
        }}
      />
      <View style={styles.indicators}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              activeIndex === index ? styles.activeIndicator : styles.inactiveIndicator,
            ]}
          />
        ))}
      </View>
   
      <TouchableOpacity style={styles.skipButton} onPress={()=>{
        navigation.navigate('Login')
      }}>
      {
        activeIndex===2?
        <Image
        source={require('../assets/started.png')}
        resizeMode="stretch"
        style={{ height: 60, width: 300 }}
      />:
      <Text style={styles.skipText}>Skip</Text>
      }  
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  logoText: {
    backgroundColor: '#001133',
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  ipsumContainer: {
    backgroundColor: '#00b386',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  ipsumText: {
    color: '#fff',
  },
  slide: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf:'center',
    paddingBottom:20,
    flex:1
    // height: 150,
  },
  slideText: {
    fontSize: 24,
  },
  indicators: {
    flexDirection: 'row',
    marginVertical: 20,
    position:'absolute',
    alignSelf:'center',
    bottom:270
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#00b386',
    width:30
  },
  inactiveIndicator: {
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10,
    color: '#001133',
    padding:20
  },
  boldText: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
    color: '#666',
    marginBottom: 80,
    paddingHorizontal:20
  },
  skipButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  skipText: {
    color: '#001133',
  },
});

export default SliderComponent;