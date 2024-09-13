import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Image, TouchableOpacity } from 'react-native';
const DetailsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
        <View style={styles.header}>
            <TouchableOpacity   onPress={() => navigation.goBack()}>   
                     <Image
        style={styles.backImage}
        source={require('../assets/back.png')}
       >

        </Image>
        </TouchableOpacity>

        <Text style={styles.headerText}>Details Screen</Text>
      </View>
      </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#1d2951',
        // alignItems: 'flex-start',
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',


      },
      headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'center',
        flex: 1,

      },
      backImage:{
        height:30,
        width:30,
      },
      innerContainer:{
        flex: 3,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        width:'100%'
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  contentText: {
    fontSize: 24,
  },
});

export default DetailsScreen;
