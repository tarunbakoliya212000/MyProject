import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, ScrollView, ActivityIndicator } from 'react-native';
import { registerUser } from '../services/apiService';

const Register: React.FC = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');
  const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', password: '', mobileNumber: '' });
  const [isLoading, setIsLoading] = useState(false);
  const validate = () => {
    let valid = true;
    let newErrors = { firstName: '', lastName: '', email: '', password: '', mobileNumber: '' };

    if (!firstName) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    if (!lastName) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }
    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }
    if (!mobileNumber || mobileNumber.length < 10) {
      newErrors.mobileNumber = 'Valid mobile number is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNext = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        const result = await registerUser(firstName, lastName, email, password, countryCode, mobileNumber);
        console.log('result',result);
        if(result.status){
          Alert.alert('Registration Successful', JSON.stringify(result));
          navigation.navigate('Home');

        }else{
          Alert.alert('Registration failure',result.message);

        }
      } catch (error) {
        Alert.alert('Registration Failed', JSON.stringify(error));
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>

    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back.png')} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.subtitle}>3 easy signup process</Text>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
          <View style={styles.remainingProgress} />
        </View>
        <Text style={styles.sectionTitle}>Enter your basic details</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        {errors.firstName ? <Text style={styles.errorText}>{errors.firstName}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        {errors.lastName ? <Text style={styles.errorText}>{errors.lastName}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        <View style={styles.phoneContainer}>
          <TextInput
            style={styles.countryCodeInput}
            value={countryCode}
            onChangeText={setCountryCode}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.phoneInput}
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
        </View>
        {errors.mobileNumber ? <Text style={styles.errorText}>{errors.mobileNumber}</Text> : null}

      </View>
    </ScrollView>
    <TouchableOpacity style={styles.nextButton} onPress={handleNext} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00b386" />
      ) : (
        <Image
          source={require('../assets/nextButton.png')}
          resizeMode="stretch"
          style={{ height: 60, width: 300 }}
        />
      )}
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'

  },
  container1: {
    flex: 1,
    padding: 20,
    backgroundColor:'white'
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001133',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  progressBar: {
    flexDirection: 'row',
    height: 4,
    width: '100%',
    marginBottom: 20,
  },
  progress: {
    flex: 1,
    backgroundColor: '#00b386',
  },
  remainingProgress: {
    flex: 2,
    backgroundColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#001133',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countryCodeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: '20%',
    marginBottom: 5,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  phoneInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: '75%',
    marginBottom: 5,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 10,
  },
  nextButton: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Register;