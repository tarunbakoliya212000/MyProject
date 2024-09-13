import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        // Simulate a loading process and navigate to the Welcome screen
        const timer = setTimeout(() => {
            navigation.replace('Slider');
        }, 2000); // Adjust the duration as needed

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <ImageBackground style={styles.container}
        resizeMode='cover'
        source={require('../assets/Splash.png')}
        >
            {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
            {/* <Text style={styles.loadingText}>Loading...</Text> */}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    logo: { width: 200, height: 100, marginBottom: 20 },
    loadingText: { fontSize: 18, color: 'gray' },
});

export default SplashScreen;