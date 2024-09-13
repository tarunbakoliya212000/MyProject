import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../services/apiService';

const LoginComponent: React.FC = () => {
  const navigation=useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const validate = () => {
    if (!email || !password) {
      setError('Please enter email and password');
      return false;
    }
    setError('');
    return true;
  };

  const handleLogin = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        const result = await loginUser(email, password);
        console.log('result',result);
        if(result.status){
          Alert.alert('Login Successful', JSON.stringify(result));
          navigation.navigate('Home');

        }else{
          Alert.alert('Login failure',result.message);

        }
      } catch (error:any) {
        Alert.alert('Login Failed', error?.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
        source={require('../assets/logo.png')}
        style={{height:50,width:200}}
        />
      </View>
      <Text style={styles.loginText}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email / Phone number"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={{right:30}}>
          {
            isPasswordVisible?
            <Image
            source={require('../assets/eyeopen.png')}
            style={{height:20,width:20}}
            />
            :
            <Image
            source={require('../assets/eyeclose.png')}
            style={{height:20,width:20}}
            />
          }
          {/* <Icon name={isPasswordVisible ? 'visibility' : 'visibility-off'} size={24} color="grey" /> */}
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.optionsContainer}>
        <View style={styles.rememberMeContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
            tintColors={{ true: '#00b386', false: '#ccc' }}
          />
          <Text style={styles.optionText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.optionText1}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00b386" />
      ) : (
        <Image
          source={require('../assets/loginButton.png')}
          resizeMode="stretch"
          style={{ height: 70, width: 300 }}
        />
      )}
    </TouchableOpacity>
      <Text style={styles.registerText} onPress={()=>{
              navigation.navigate('Register')

      }}>
        Don’t have an account? <Text style={styles.registerLink}>Register now!</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 40,
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
  loginText: {
    fontSize: 24,
    color: '#001133',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    width: '100%',
    // marginBottom: 20,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  optionText: {
    fontSize: 14,
    color: '#666',
  },
  optionText1: {
    fontSize: 14,
    color: '#666',
    marginTop:6
  },
  loginButton: {
    // backgroundColor: '#00b386',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerText: {
    fontSize: 14,
    color: '#666',
  },
  registerLink: {
    color: '#00b386',
  },
});

export default LoginComponent;