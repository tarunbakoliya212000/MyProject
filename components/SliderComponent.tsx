import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

interface SlideProps {
  title: string;
  description: string;
}

interface SliderComponentProps {
  data: SlideProps[];
}


const Slide: React.FC<SlideProps> = ({ title, description }) => (
  <View style={styles.slide}>
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>Logo</Text>
      <Text style={styles.ipsumText}>Ipsum</Text>
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
  
);

const SliderComponent: React.FC<SliderComponentProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderItem = ({ item }: { item: SlideProps }) => (
    <Slide title={item.title} description={item.description} />
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        loop={true}
        autoplay={true}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.activeDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'green',

  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red',
    alignSelf:'center',
    height:500

  },
  logoContainer: {
    flexDirection: 'row',
    backgroundColor: '#1e2a47',
    padding: 10,
    marginBottom: 20,
  },
  logoText: {
    color: 'white',
    marginRight: 10,
  },
  ipsumText: {
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e2a47',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#1e2a47',
    textAlign: 'center',
  },
  skipButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  skipText: {
    color: '#1e2a47',
    fontSize: 16,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1e2a47',
  },
});

export default SliderComponent;